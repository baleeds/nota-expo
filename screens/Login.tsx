import { useSignInMutation } from '../api/__generated__/apollo-graphql';
import { useAuth } from '../providers/AuthProvider';
import React, { useRef } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Logo } from '../components/Logo';
import { FormGroup } from '../components/FormGroup';
import { FormTextInput } from '../components/FormTextInput';
import { Colors } from '../constants/Colors';
import { Button } from '../components/Button';
import { useFormik } from 'formik';
import { FullScreenLoading } from '../components/FullScreenLoading';
import { Ionicons } from '@expo/vector-icons';
import { LoginStackNavProps } from '../navigation/LoginStack';

interface Props extends LoginStackNavProps<'Login'> {}

interface Values {
  email: string;
  password: string;
}

export const Login: React.FC<Props> = ({ navigation }) => {
  const [signInUserMutation] = useSignInMutation();
  const { login } = useAuth();
  const passwordRef = useRef<TextInput>(null);

  const formik = useFormik<Values>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { setSubmitting, setStatus }) => {
      signInUserMutation({
        variables: {
          input: values,
        },
      })
        .then((result) => {
          const {
            accessToken = undefined,
            refreshToken = undefined,
            user = undefined,
          } = result?.data?.signIn.result || {};

          if (!accessToken || !refreshToken || !user) {
            setStatus('Incorrect email or password.');
            return;
          }

          login({ user, accessToken, refreshToken });
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Logo height={50} />
          <View style={styles.headerTaglineContainer}>
            <Text style={styles.headerTagline}>Log in to start your collection.</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            {formik.status && (
              <View style={styles.inlineError}>
                <Ionicons
                  name={'alert-circle-outline'}
                  size={20}
                  color={Colors.textError}
                  style={styles.inlineErrorIcon}
                />
                <Text style={styles.inlineErrorText}>{formik.status}</Text>
              </View>
            )}
            <FormGroup label="Email">
              <FormTextInput
                returnKeyType="next"
                keyboardType="email-address"
                spellCheck={false}
                textContentType="username"
                autoCapitalize="none"
                onSubmitEditing={() => passwordRef.current?.focus()}
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
              />
            </FormGroup>

            <FormGroup label="Password">
              <FormTextInput
                innerRef={passwordRef}
                returnKeyType="go"
                secureTextEntry
                textContentType="password"
                autoCapitalize="none"
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                onSubmitEditing={formik.submitForm}
              />
            </FormGroup>

            <Button type="primary" style={{ marginTop: 16 }} onPress={formik.submitForm} disabled={formik.isSubmitting}>
              Log in
            </Button>

            <Button type="ghostSubtle" style={{ marginTop: 8 }}>
              Forgot password?
            </Button>
          </View>

          <Button type="ghostSubtle" onPress={() => navigation.navigate('SignUp')}>
            Dont have an account? <Text style={{ color: Colors.primary }}>Sign up</Text>
          </Button>
        </View>
      </SafeAreaView>

      <FullScreenLoading isLoading={formik.isSubmitting} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundLight,
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerTaglineContainer: {
    marginTop: 16,
  },
  headerTagline: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    color: Colors.text,
  },
  body: {
    justifyContent: 'space-between',
    padding: 30,
    flex: 2,
  },
  inlineError: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineErrorText: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '500',
    color: Colors.textError,
  },
  inlineErrorIcon: {
    marginRight: 8,
  },
});
