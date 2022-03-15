import React, { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { FormGroup } from '../components/FormGroup';
import { FormTextInput } from '../components/FormTextInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessages } from '../constants/ErrorMessages';
import { Button } from '../components/Button';
import { FullScreenLoading } from '../components/FullScreenLoading';
import { LoginStackNavProps } from '../navigation/LoginStack';
import { CreateAccountMutation, useCreateAccountMutation } from '../api/__generated__/apollo-graphql';
import { attempt } from '../utils/attempt';
import { normalizeErrors } from '../utils/normalizeErrors';

interface Props extends LoginStackNavProps<'SignUp'> {}

interface Values {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(ErrorMessages.isRequired('first name'))
    .min(1, ErrorMessages.minLength('first name', 1))
    .max(30, ErrorMessages.maxLength('first name', 30)),
  lastName: Yup.string()
    .required(ErrorMessages.isRequired('last name'))
    .min(1, ErrorMessages.minLength('last name', 1))
    .max(30, ErrorMessages.maxLength('first name', 30)),
  email: Yup.string().required(ErrorMessages.isRequired('email')).matches(/@/, ErrorMessages.mustBeValid('email')),
  password: Yup.string()
    .min(1, ErrorMessages.minLength('password', 1))
    .max(255, ErrorMessages.maxLength('password', 255))
    .required(ErrorMessages.isRequired('password')),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'passwords should match')
    .required(ErrorMessages.isRequired('password confirmation')),
});

export const SignUp: React.FC<Props> = ({ navigation }) => {
  const [success, setSuccess] = useState(false);
  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const [createAccountMutation] = useCreateAccountMutation();

  const formik = useFormik<Values>({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values, { setSubmitting, setErrors, setStatus }) => {
      const [failure, result] = await attempt(
        createAccountMutation({
          variables: {
            input: {
              email: values.email,
              firstName: values.firstName,
              lastName: values.lastName,
              password: values.password,
            },
          },
        }),
      );

      const { hasError, base, fields } = normalizeErrors<CreateAccountMutation, Values>(failure, result);

      const { id } = result?.data?.createAccount?.result ?? {};

      if (hasError || !id) {
        if (fields) {
          setErrors(fields);
        } else {
          setStatus(base || ErrorMessages.unknown);
        }

        setSubmitting(false);
        return;
      }

      setSuccess(true);
    },
    validationSchema,
  });

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
            {success ? (
              <>
                <Text style={styles.header}>Account created</Text>
                <Button type="primary" onPress={navigation.goBack}>
                  Continue to log in
                </Button>
              </>
            ) : (
              <>
                <Text style={styles.header}>Create an account</Text>

                <FormGroup label="Email">
                  <FormTextInput
                    returnKeyType="next"
                    keyboardType="email-address"
                    spellCheck={false}
                    autoCapitalize="none"
                    onSubmitEditing={() => firstNameRef.current?.focus()}
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    errorMessage={formik.errors.email}
                    touched={formik.touched.email}
                  />
                </FormGroup>

                <FormGroup label="First name">
                  <FormTextInput
                    innerRef={firstNameRef}
                    returnKeyType="next"
                    spellCheck={false}
                    autoCapitalize="words"
                    onSubmitEditing={() => lastNameRef.current?.focus()}
                    value={formik.values.firstName}
                    onChangeText={formik.handleChange('firstName')}
                    onBlur={formik.handleBlur('firstName')}
                    errorMessage={formik.errors.firstName}
                    touched={formik.touched.firstName}
                  />
                </FormGroup>

                <FormGroup label="Last name">
                  <FormTextInput
                    innerRef={lastNameRef}
                    returnKeyType="next"
                    spellCheck={false}
                    autoCapitalize="words"
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    value={formik.values.lastName}
                    onChangeText={formik.handleChange('lastName')}
                    onBlur={formik.handleBlur('lastName')}
                    errorMessage={formik.errors.lastName}
                    touched={formik.touched.lastName}
                  />
                </FormGroup>

                <FormGroup label="Password">
                  <FormTextInput
                    innerRef={passwordRef}
                    returnKeyType="next"
                    secureTextEntry
                    textContentType="password"
                    autoCapitalize="none"
                    onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    errorMessage={formik.errors.password}
                    touched={formik.touched.password}
                  />
                </FormGroup>

                <FormGroup label="Confirm password">
                  <FormTextInput
                    innerRef={confirmPasswordRef}
                    returnKeyType="go"
                    secureTextEntry
                    textContentType="password"
                    autoCapitalize="none"
                    value={formik.values.confirmPassword}
                    onChangeText={formik.handleChange('confirmPassword')}
                    onBlur={formik.handleBlur('confirmPassword')}
                    errorMessage={formik.errors.confirmPassword}
                    onSubmitEditing={formik.submitForm}
                    touched={formik.touched.confirmPassword}
                  />
                </FormGroup>

                <Button type="primary" style={{ marginTop: 16 }} onPress={formik.submitForm}>
                  Sign up
                </Button>

                <Button type="ghostSubtle" style={{ marginTop: 24 }} onPress={() => navigation.goBack()}>
                  Already have an account? <Text style={{ color: Colors.primary }}>Log in</Text>
                </Button>
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <FullScreenLoading isLoading={formik.isSubmitting} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  header: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 24,
  },
});
