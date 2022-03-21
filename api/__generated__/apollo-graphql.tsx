/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a date and time in the UTC
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string, including UTC timezone ("Z"). The parsed date and time string will
   * be converted to UTC if there is an offset.
   */
  DateTime: any;
};

export type Annotation = Node & {
  __typename?: 'Annotation';
  /** The ID of an object */
  id: Scalars['ID'];
  insertedAt: Scalars['DateTime'];
  isFavorite: Scalars['Boolean'];
  isMine: Scalars['Boolean'];
  numberOfFavorites: Scalars['Int'];
  numberOfReplies: Scalars['Int'];
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
  verse: Verse;
  verseId: Scalars['ID'];
};

export type AnnotationConnection = {
  __typename?: 'AnnotationConnection';
  edges?: Maybe<Array<Maybe<AnnotationEdge>>>;
  pageInfo: PageInfo;
};

export type AnnotationEdge = {
  __typename?: 'AnnotationEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Annotation>;
};

export type AnnotationReply = Node & {
  __typename?: 'AnnotationReply';
  annotation: Annotation;
  annotationId: Scalars['ID'];
  /** The ID of an object */
  id: Scalars['ID'];
  insertedAt: Scalars['DateTime'];
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type AnnotationReplyConnection = {
  __typename?: 'AnnotationReplyConnection';
  edges?: Maybe<Array<Maybe<AnnotationReplyEdge>>>;
  pageInfo: PageInfo;
};

export type AnnotationReplyEdge = {
  __typename?: 'AnnotationReplyEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<AnnotationReply>;
};

export type BookmarkVerseInput = {
  verseId: Scalars['ID'];
};

export type BookmarkVersePayload = {
  __typename?: 'BookmarkVersePayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Verse>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type ChangeDisplayNameInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type ChangeDisplayNamePayload = {
  __typename?: 'ChangeDisplayNamePayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<User>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type ChangePasswordPayload = {
  __typename?: 'ChangePasswordPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Scalars['Boolean']>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type CreateAccountInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type CreateAccountPayload = {
  __typename?: 'CreateAccountPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<User>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type DeleteAnnotationPayload = {
  __typename?: 'DeleteAnnotationPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Scalars['Boolean']>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type DeleteAnnotationReplyPayload = {
  __typename?: 'DeleteAnnotationReplyPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Scalars['Boolean']>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type FavoriteAnnotationInput = {
  annotationId: Scalars['ID'];
};

export type FavoriteAnnotationPayload = {
  __typename?: 'FavoriteAnnotationPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Annotation>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<SessionInfo>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Scalars['Boolean']>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  bookmarkVerse: BookmarkVersePayload;
  changeDisplayName: ChangeDisplayNamePayload;
  changePassword: ChangePasswordPayload;
  createAccount: CreateAccountPayload;
  deleteAnnotation: DeleteAnnotationPayload;
  deleteAnnotationReply: DeleteAnnotationReplyPayload;
  favoriteAnnotation: FavoriteAnnotationPayload;
  refreshToken: RefreshTokenPayload;
  resetPassword: ResetPasswordPayload;
  saveAnnotation: SaveAnnotationPayload;
  saveAnnotationReply: SaveAnnotationReplyPayload;
  sendForgotPassword: SendForgotPasswordPayload;
  signIn: SignInPayload;
  signOut: SignOutPayload;
  signOutEverywhere: SignOutPayload;
  unbookmarkVerse: UnbookmarkVersePayload;
  unfavoriteAnnotation: UnfavoriteAnnotationPayload;
};


export type RootMutationTypeBookmarkVerseArgs = {
  input: BookmarkVerseInput;
};


export type RootMutationTypeChangeDisplayNameArgs = {
  input: ChangeDisplayNameInput;
};


export type RootMutationTypeChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type RootMutationTypeCreateAccountArgs = {
  input: CreateAccountInput;
};


export type RootMutationTypeDeleteAnnotationArgs = {
  annotationId: Scalars['ID'];
};


export type RootMutationTypeDeleteAnnotationReplyArgs = {
  annotationReplyId: Scalars['ID'];
};


export type RootMutationTypeFavoriteAnnotationArgs = {
  input: FavoriteAnnotationInput;
};


export type RootMutationTypeRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type RootMutationTypeResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type RootMutationTypeSaveAnnotationArgs = {
  input: SaveAnnotationInput;
};


export type RootMutationTypeSaveAnnotationReplyArgs = {
  input: SaveAnnotationReplyInput;
};


export type RootMutationTypeSendForgotPasswordArgs = {
  input: SendForgotPasswordInput;
};


export type RootMutationTypeSignInArgs = {
  input: SignInInput;
};


export type RootMutationTypeSignOutArgs = {
  refreshToken: Scalars['String'];
};


export type RootMutationTypeUnbookmarkVerseArgs = {
  input: UnbookmarkVerseInput;
};


export type RootMutationTypeUnfavoriteAnnotationArgs = {
  input: UnfavoriteAnnotationInput;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  annotation: Annotation;
  annotationReplies?: Maybe<AnnotationReplyConnection>;
  annotations?: Maybe<AnnotationConnection>;
  me?: Maybe<User>;
  user: User;
  verse: Verse;
  verses?: Maybe<Array<Verse>>;
};


export type RootQueryTypeAnnotationArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeAnnotationRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  annotationId?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type RootQueryTypeAnnotationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  isMine?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['ID']>;
  verseId?: InputMaybe<Scalars['ID']>;
};


export type RootQueryTypeUserArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeVerseArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeVersesArgs = {
  bookNumber: Scalars['Int'];
  chapterNumber: Scalars['Int'];
};

export type SaveAnnotationInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  insertedAt?: InputMaybe<Scalars['DateTime']>;
  text: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  verseId: Scalars['ID'];
};

export type SaveAnnotationPayload = {
  __typename?: 'SaveAnnotationPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Annotation>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type SaveAnnotationReplyInput = {
  annotationId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  text: Scalars['String'];
};

export type SaveAnnotationReplyPayload = {
  __typename?: 'SaveAnnotationReplyPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<AnnotationReply>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type SendForgotPasswordInput = {
  email: Scalars['String'];
};

export type SendForgotPasswordPayload = {
  __typename?: 'SendForgotPasswordPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Scalars['Boolean']>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type SessionInfo = {
  __typename?: 'SessionInfo';
  accessToken: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  user: User;
  userId?: Maybe<Scalars['ID']>;
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignInPayload = {
  __typename?: 'SignInPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<SessionInfo>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type SignOutPayload = {
  __typename?: 'SignOutPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Scalars['Boolean']>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type UnbookmarkVerseInput = {
  verseId: Scalars['ID'];
};

export type UnbookmarkVersePayload = {
  __typename?: 'UnbookmarkVersePayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Verse>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type UnfavoriteAnnotationInput = {
  annotationId: Scalars['ID'];
};

export type UnfavoriteAnnotationPayload = {
  __typename?: 'UnfavoriteAnnotationPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Annotation>;
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars['Boolean'];
};

export type User = Node & {
  __typename?: 'User';
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
};

/**
 *   Validation messages are returned when mutation input does not meet the requirements.
 *   While client-side validation is highly recommended to provide the best User Experience,
 *   All inputs will always be validated server-side.
 *
 *   Some examples of validations are:
 *
 *   * Username must be at least 10 characters
 *   * Email field does not contain an email address
 *   * Birth Date is required
 *
 *   While GraphQL has support for required values, mutation data fields are always
 *   set to optional in our API. This allows 'required field' messages
 *   to be returned in the same manner as other validations. The only exceptions
 *   are id fields, which may be required to perform updates or deletes.
 *
 */
export type ValidationMessage = {
  __typename?: 'ValidationMessage';
  /** A unique error code for the type of validation used. */
  code: Scalars['String'];
  /**
   * The input field that the error applies to. The field can be used to
   * identify which field the error message should be displayed next to in the
   * presentation layer.
   *
   * If there are multiple errors to display for a field, multiple validation
   * messages will be in the result.
   *
   * This field may be null in cases where an error cannot be applied to a specific field.
   *
   */
  field?: Maybe<Scalars['String']>;
  /**
   * A friendly error message, appropriate for display to the end user.
   *
   * The message is interpolated to include the appropriate variables.
   *
   * Example: `Username must be at least 10 characters`
   *
   * This message may change without notice, so we do not recommend you match against the text.
   * Instead, use the *code* field for matching.
   *
   */
  message?: Maybe<Scalars['String']>;
  /** A list of substitutions to be applied to a validation message template */
  options?: Maybe<Array<Maybe<ValidationOption>>>;
  /**
   * A template used to generate the error message, with placeholders for option substiution.
   *
   * Example: `Username must be at least {count} characters`
   *
   * This message may change without notice, so we do not recommend you match against the text.
   * Instead, use the *code* field for matching.
   *
   */
  template?: Maybe<Scalars['String']>;
};

export type ValidationOption = {
  __typename?: 'ValidationOption';
  /** The name of a variable to be subsituted in a validation message template */
  key: Scalars['String'];
  /** The value of a variable to be substituted in a validation message template */
  value: Scalars['String'];
};

export type Verse = {
  __typename?: 'Verse';
  bookNumber: Scalars['Int'];
  chapterNumber: Scalars['Int'];
  id: Scalars['ID'];
  isAnnotated: Scalars['Boolean'];
  isAnnotatedByMe: Scalars['Boolean'];
  isBookmarked: Scalars['Boolean'];
  text: Scalars['String'];
  verseNumber: Scalars['Int'];
};

export type AnnotationFragment = { __typename?: 'Annotation', id: string, text: string, isFavorite: boolean, isMine: boolean, numberOfFavorites: number, insertedAt: any, verseId: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } };

export type MeFragment = { __typename?: 'User', id: string, email: string };

export type VerseFragment = { __typename?: 'Verse', id: string, isBookmarked: boolean, isAnnotatedByMe: boolean, isAnnotated: boolean };

export type BookmarkVerseMutationVariables = Exact<{
  input: BookmarkVerseInput;
}>;


export type BookmarkVerseMutation = { __typename?: 'RootMutationType', bookmarkVerse: { __typename?: 'BookmarkVersePayload', successful: boolean, result?: { __typename?: 'Verse', id: string, isBookmarked: boolean } | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type ChangeDisplayNameMutationVariables = Exact<{
  input: ChangeDisplayNameInput;
}>;


export type ChangeDisplayNameMutation = { __typename?: 'RootMutationType', changeDisplayName: { __typename?: 'ChangeDisplayNamePayload', successful: boolean, result?: { __typename?: 'User', id: string, email: string } | null } };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'RootMutationType', changePassword: { __typename?: 'ChangePasswordPayload', successful: boolean, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type CreateAccountMutationVariables = Exact<{
  input: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'RootMutationType', createAccount: { __typename?: 'CreateAccountPayload', successful: boolean, result?: { __typename?: 'User', id: string } | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type FavoriteAnnotationMutationVariables = Exact<{
  input: FavoriteAnnotationInput;
}>;


export type FavoriteAnnotationMutation = { __typename?: 'RootMutationType', favoriteAnnotation: { __typename?: 'FavoriteAnnotationPayload', successful: boolean, result?: { __typename?: 'Annotation', id: string, isFavorite: boolean, numberOfFavorites: number } | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'RootMutationType', resetPassword: { __typename?: 'ResetPasswordPayload', result?: boolean | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type SaveAnnotationMutationVariables = Exact<{
  input: SaveAnnotationInput;
}>;


export type SaveAnnotationMutation = { __typename?: 'RootMutationType', saveAnnotation: { __typename?: 'SaveAnnotationPayload', successful: boolean, result?: { __typename?: 'Annotation', id: string, text: string } | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type SendForgotPasswordMutationVariables = Exact<{
  input: SendForgotPasswordInput;
}>;


export type SendForgotPasswordMutation = { __typename?: 'RootMutationType', sendForgotPassword: { __typename?: 'SendForgotPasswordPayload', successful: boolean, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'RootMutationType', signIn: { __typename?: 'SignInPayload', result?: { __typename?: 'SessionInfo', accessToken: string, refreshToken?: string | null, user: { __typename?: 'User', id: string, email: string } } | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type SignOutMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type SignOutMutation = { __typename?: 'RootMutationType', signOut: { __typename?: 'SignOutPayload', result?: boolean | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type UnbookmarkVerseMutationVariables = Exact<{
  input: UnbookmarkVerseInput;
}>;


export type UnbookmarkVerseMutation = { __typename?: 'RootMutationType', unbookmarkVerse: { __typename?: 'UnbookmarkVersePayload', successful: boolean, result?: { __typename?: 'Verse', id: string, isBookmarked: boolean } | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type UnfavoriteAnnotationMutationVariables = Exact<{
  input: UnfavoriteAnnotationInput;
}>;


export type UnfavoriteAnnotationMutation = { __typename?: 'RootMutationType', unfavoriteAnnotation: { __typename?: 'UnfavoriteAnnotationPayload', successful: boolean, result?: { __typename?: 'Annotation', id: string, isFavorite: boolean, numberOfFavorites: number } | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } };

export type AnnotationQueryVariables = Exact<{
  annotationId: Scalars['ID'];
}>;


export type AnnotationQuery = { __typename?: 'RootQueryType', annotation: { __typename?: 'Annotation', id: string, text: string, isFavorite: boolean, isMine: boolean, numberOfFavorites: number, insertedAt: any, verseId: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } } };

export type CollectionAnnotationsQueryVariables = Exact<{
  userId: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type CollectionAnnotationsQuery = { __typename?: 'RootQueryType', annotations?: { __typename?: 'AnnotationConnection', edges?: Array<{ __typename?: 'AnnotationEdge', node?: { __typename?: 'Annotation', id: string, text: string, isFavorite: boolean, isMine: boolean, numberOfFavorites: number, insertedAt: any, verseId: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type FavoriteAnnotationsQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type FavoriteAnnotationsQuery = { __typename?: 'RootQueryType', annotations?: { __typename?: 'AnnotationConnection', edges?: Array<{ __typename?: 'AnnotationEdge', node?: { __typename?: 'Annotation', id: string, text: string, isFavorite: boolean, isMine: boolean, numberOfFavorites: number, insertedAt: any, verseId: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type GetVerseQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetVerseQuery = { __typename?: 'RootQueryType', verse: { __typename?: 'Verse', id: string, isBookmarked: boolean, isAnnotatedByMe: boolean, isAnnotated: boolean } };

export type MyCollectionAnnotationsQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type MyCollectionAnnotationsQuery = { __typename?: 'RootQueryType', annotations?: { __typename?: 'AnnotationConnection', edges?: Array<{ __typename?: 'AnnotationEdge', node?: { __typename?: 'Annotation', id: string, text: string, isFavorite: boolean, isMine: boolean, numberOfFavorites: number, insertedAt: any, verseId: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type UserProfileQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type UserProfileQuery = { __typename?: 'RootQueryType', user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } };

export type VerseAnnotationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  verseId: Scalars['ID'];
}>;


export type VerseAnnotationsQuery = { __typename?: 'RootQueryType', annotations?: { __typename?: 'AnnotationConnection', edges?: Array<{ __typename?: 'AnnotationEdge', node?: { __typename?: 'Annotation', id: string, text: string, isFavorite: boolean, isMine: boolean, numberOfFavorites: number, insertedAt: any, verseId: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type VersesForChapterQueryVariables = Exact<{
  bookNumber: Scalars['Int'];
  chapterNumber: Scalars['Int'];
}>;


export type VersesForChapterQuery = { __typename?: 'RootQueryType', verses?: Array<{ __typename?: 'Verse', id: string, isBookmarked: boolean, isAnnotatedByMe: boolean, isAnnotated: boolean }> | null };

export const AnnotationFragmentDoc = gql`
    fragment Annotation on Annotation {
  id
  text
  isFavorite
  isMine
  numberOfFavorites
  insertedAt
  verseId
  user {
    id
    firstName
    lastName
  }
}
    `;
export const MeFragmentDoc = gql`
    fragment Me on User {
  id
  email
}
    `;
export const VerseFragmentDoc = gql`
    fragment Verse on Verse {
  id
  isBookmarked
  isAnnotatedByMe
  isAnnotated
}
    `;
export const BookmarkVerseDocument = gql`
    mutation BookmarkVerse($input: BookmarkVerseInput!) {
  bookmarkVerse(input: $input) {
    successful
    result {
      id
      isBookmarked
    }
    messages {
      field
      message
    }
  }
}
    `;
export type BookmarkVerseMutationFn = Apollo.MutationFunction<BookmarkVerseMutation, BookmarkVerseMutationVariables>;

/**
 * __useBookmarkVerseMutation__
 *
 * To run a mutation, you first call `useBookmarkVerseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBookmarkVerseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bookmarkVerseMutation, { data, loading, error }] = useBookmarkVerseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBookmarkVerseMutation(baseOptions?: Apollo.MutationHookOptions<BookmarkVerseMutation, BookmarkVerseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BookmarkVerseMutation, BookmarkVerseMutationVariables>(BookmarkVerseDocument, options);
      }
export type BookmarkVerseMutationHookResult = ReturnType<typeof useBookmarkVerseMutation>;
export type BookmarkVerseMutationResult = Apollo.MutationResult<BookmarkVerseMutation>;
export type BookmarkVerseMutationOptions = Apollo.BaseMutationOptions<BookmarkVerseMutation, BookmarkVerseMutationVariables>;
export const ChangeDisplayNameDocument = gql`
    mutation ChangeDisplayName($input: ChangeDisplayNameInput!) {
  changeDisplayName(input: $input) {
    successful
    result {
      ...Me
    }
  }
}
    ${MeFragmentDoc}`;
export type ChangeDisplayNameMutationFn = Apollo.MutationFunction<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>;

/**
 * __useChangeDisplayNameMutation__
 *
 * To run a mutation, you first call `useChangeDisplayNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeDisplayNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeDisplayNameMutation, { data, loading, error }] = useChangeDisplayNameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeDisplayNameMutation(baseOptions?: Apollo.MutationHookOptions<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>(ChangeDisplayNameDocument, options);
      }
export type ChangeDisplayNameMutationHookResult = ReturnType<typeof useChangeDisplayNameMutation>;
export type ChangeDisplayNameMutationResult = Apollo.MutationResult<ChangeDisplayNameMutation>;
export type ChangeDisplayNameMutationOptions = Apollo.BaseMutationOptions<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    successful
    messages {
      field
      message
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateAccountDocument = gql`
    mutation CreateAccount($input: CreateAccountInput!) {
  createAccount(input: $input) {
    result {
      id
    }
    messages {
      field
      message
    }
    successful
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const FavoriteAnnotationDocument = gql`
    mutation FavoriteAnnotation($input: FavoriteAnnotationInput!) {
  favoriteAnnotation(input: $input) {
    successful
    result {
      id
      isFavorite
      numberOfFavorites
    }
    messages {
      field
      message
    }
  }
}
    `;
export type FavoriteAnnotationMutationFn = Apollo.MutationFunction<FavoriteAnnotationMutation, FavoriteAnnotationMutationVariables>;

/**
 * __useFavoriteAnnotationMutation__
 *
 * To run a mutation, you first call `useFavoriteAnnotationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavoriteAnnotationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favoriteAnnotationMutation, { data, loading, error }] = useFavoriteAnnotationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFavoriteAnnotationMutation(baseOptions?: Apollo.MutationHookOptions<FavoriteAnnotationMutation, FavoriteAnnotationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FavoriteAnnotationMutation, FavoriteAnnotationMutationVariables>(FavoriteAnnotationDocument, options);
      }
export type FavoriteAnnotationMutationHookResult = ReturnType<typeof useFavoriteAnnotationMutation>;
export type FavoriteAnnotationMutationResult = Apollo.MutationResult<FavoriteAnnotationMutation>;
export type FavoriteAnnotationMutationOptions = Apollo.BaseMutationOptions<FavoriteAnnotationMutation, FavoriteAnnotationMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: ResetPasswordInput!) {
  resetPassword(input: $input) {
    result
    messages {
      field
      message
    }
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SaveAnnotationDocument = gql`
    mutation SaveAnnotation($input: SaveAnnotationInput!) {
  saveAnnotation(input: $input) {
    result {
      id
      text
    }
    messages {
      field
      message
    }
    successful
  }
}
    `;
export type SaveAnnotationMutationFn = Apollo.MutationFunction<SaveAnnotationMutation, SaveAnnotationMutationVariables>;

/**
 * __useSaveAnnotationMutation__
 *
 * To run a mutation, you first call `useSaveAnnotationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveAnnotationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveAnnotationMutation, { data, loading, error }] = useSaveAnnotationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSaveAnnotationMutation(baseOptions?: Apollo.MutationHookOptions<SaveAnnotationMutation, SaveAnnotationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveAnnotationMutation, SaveAnnotationMutationVariables>(SaveAnnotationDocument, options);
      }
export type SaveAnnotationMutationHookResult = ReturnType<typeof useSaveAnnotationMutation>;
export type SaveAnnotationMutationResult = Apollo.MutationResult<SaveAnnotationMutation>;
export type SaveAnnotationMutationOptions = Apollo.BaseMutationOptions<SaveAnnotationMutation, SaveAnnotationMutationVariables>;
export const SendForgotPasswordDocument = gql`
    mutation SendForgotPassword($input: SendForgotPasswordInput!) {
  sendForgotPassword(input: $input) {
    successful
    messages {
      field
      message
    }
  }
}
    `;
export type SendForgotPasswordMutationFn = Apollo.MutationFunction<SendForgotPasswordMutation, SendForgotPasswordMutationVariables>;

/**
 * __useSendForgotPasswordMutation__
 *
 * To run a mutation, you first call `useSendForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendForgotPasswordMutation, { data, loading, error }] = useSendForgotPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<SendForgotPasswordMutation, SendForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendForgotPasswordMutation, SendForgotPasswordMutationVariables>(SendForgotPasswordDocument, options);
      }
export type SendForgotPasswordMutationHookResult = ReturnType<typeof useSendForgotPasswordMutation>;
export type SendForgotPasswordMutationResult = Apollo.MutationResult<SendForgotPasswordMutation>;
export type SendForgotPasswordMutationOptions = Apollo.BaseMutationOptions<SendForgotPasswordMutation, SendForgotPasswordMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($input: SignInInput!) {
  signIn(input: $input) {
    result {
      accessToken
      refreshToken
      user {
        ...Me
      }
    }
    messages {
      field
      message
    }
  }
}
    ${MeFragmentDoc}`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
    mutation SignOut($refreshToken: String!) {
  signOut(refreshToken: $refreshToken) {
    result
    messages {
      field
      message
    }
  }
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const UnbookmarkVerseDocument = gql`
    mutation UnbookmarkVerse($input: UnbookmarkVerseInput!) {
  unbookmarkVerse(input: $input) {
    successful
    result {
      id
      isBookmarked
    }
    messages {
      field
      message
    }
  }
}
    `;
export type UnbookmarkVerseMutationFn = Apollo.MutationFunction<UnbookmarkVerseMutation, UnbookmarkVerseMutationVariables>;

/**
 * __useUnbookmarkVerseMutation__
 *
 * To run a mutation, you first call `useUnbookmarkVerseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnbookmarkVerseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unbookmarkVerseMutation, { data, loading, error }] = useUnbookmarkVerseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUnbookmarkVerseMutation(baseOptions?: Apollo.MutationHookOptions<UnbookmarkVerseMutation, UnbookmarkVerseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnbookmarkVerseMutation, UnbookmarkVerseMutationVariables>(UnbookmarkVerseDocument, options);
      }
export type UnbookmarkVerseMutationHookResult = ReturnType<typeof useUnbookmarkVerseMutation>;
export type UnbookmarkVerseMutationResult = Apollo.MutationResult<UnbookmarkVerseMutation>;
export type UnbookmarkVerseMutationOptions = Apollo.BaseMutationOptions<UnbookmarkVerseMutation, UnbookmarkVerseMutationVariables>;
export const UnfavoriteAnnotationDocument = gql`
    mutation UnfavoriteAnnotation($input: UnfavoriteAnnotationInput!) {
  unfavoriteAnnotation(input: $input) {
    successful
    result {
      id
      isFavorite
      numberOfFavorites
    }
    messages {
      field
      message
    }
  }
}
    `;
export type UnfavoriteAnnotationMutationFn = Apollo.MutationFunction<UnfavoriteAnnotationMutation, UnfavoriteAnnotationMutationVariables>;

/**
 * __useUnfavoriteAnnotationMutation__
 *
 * To run a mutation, you first call `useUnfavoriteAnnotationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfavoriteAnnotationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfavoriteAnnotationMutation, { data, loading, error }] = useUnfavoriteAnnotationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUnfavoriteAnnotationMutation(baseOptions?: Apollo.MutationHookOptions<UnfavoriteAnnotationMutation, UnfavoriteAnnotationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnfavoriteAnnotationMutation, UnfavoriteAnnotationMutationVariables>(UnfavoriteAnnotationDocument, options);
      }
export type UnfavoriteAnnotationMutationHookResult = ReturnType<typeof useUnfavoriteAnnotationMutation>;
export type UnfavoriteAnnotationMutationResult = Apollo.MutationResult<UnfavoriteAnnotationMutation>;
export type UnfavoriteAnnotationMutationOptions = Apollo.BaseMutationOptions<UnfavoriteAnnotationMutation, UnfavoriteAnnotationMutationVariables>;
export const AnnotationDocument = gql`
    query Annotation($annotationId: ID!) {
  annotation(id: $annotationId) {
    ...Annotation
  }
}
    ${AnnotationFragmentDoc}`;

/**
 * __useAnnotationQuery__
 *
 * To run a query within a React component, call `useAnnotationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnnotationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnnotationQuery({
 *   variables: {
 *      annotationId: // value for 'annotationId'
 *   },
 * });
 */
export function useAnnotationQuery(baseOptions: Apollo.QueryHookOptions<AnnotationQuery, AnnotationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnnotationQuery, AnnotationQueryVariables>(AnnotationDocument, options);
      }
export function useAnnotationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnnotationQuery, AnnotationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnnotationQuery, AnnotationQueryVariables>(AnnotationDocument, options);
        }
export type AnnotationQueryHookResult = ReturnType<typeof useAnnotationQuery>;
export type AnnotationLazyQueryHookResult = ReturnType<typeof useAnnotationLazyQuery>;
export type AnnotationQueryResult = Apollo.QueryResult<AnnotationQuery, AnnotationQueryVariables>;
export const CollectionAnnotationsDocument = gql`
    query CollectionAnnotations($userId: ID!, $first: Int, $after: String) {
  annotations(userId: $userId, first: $first, after: $after) {
    edges {
      node {
        ...Annotation
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
    ${AnnotationFragmentDoc}`;

/**
 * __useCollectionAnnotationsQuery__
 *
 * To run a query within a React component, call `useCollectionAnnotationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionAnnotationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionAnnotationsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCollectionAnnotationsQuery(baseOptions: Apollo.QueryHookOptions<CollectionAnnotationsQuery, CollectionAnnotationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionAnnotationsQuery, CollectionAnnotationsQueryVariables>(CollectionAnnotationsDocument, options);
      }
export function useCollectionAnnotationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionAnnotationsQuery, CollectionAnnotationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionAnnotationsQuery, CollectionAnnotationsQueryVariables>(CollectionAnnotationsDocument, options);
        }
export type CollectionAnnotationsQueryHookResult = ReturnType<typeof useCollectionAnnotationsQuery>;
export type CollectionAnnotationsLazyQueryHookResult = ReturnType<typeof useCollectionAnnotationsLazyQuery>;
export type CollectionAnnotationsQueryResult = Apollo.QueryResult<CollectionAnnotationsQuery, CollectionAnnotationsQueryVariables>;
export const FavoriteAnnotationsDocument = gql`
    query FavoriteAnnotations($first: Int!, $after: String) {
  annotations(first: $first, after: $after, isFavorite: true) {
    edges {
      node {
        ...Annotation
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
    ${AnnotationFragmentDoc}`;

/**
 * __useFavoriteAnnotationsQuery__
 *
 * To run a query within a React component, call `useFavoriteAnnotationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoriteAnnotationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoriteAnnotationsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useFavoriteAnnotationsQuery(baseOptions: Apollo.QueryHookOptions<FavoriteAnnotationsQuery, FavoriteAnnotationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FavoriteAnnotationsQuery, FavoriteAnnotationsQueryVariables>(FavoriteAnnotationsDocument, options);
      }
export function useFavoriteAnnotationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FavoriteAnnotationsQuery, FavoriteAnnotationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FavoriteAnnotationsQuery, FavoriteAnnotationsQueryVariables>(FavoriteAnnotationsDocument, options);
        }
export type FavoriteAnnotationsQueryHookResult = ReturnType<typeof useFavoriteAnnotationsQuery>;
export type FavoriteAnnotationsLazyQueryHookResult = ReturnType<typeof useFavoriteAnnotationsLazyQuery>;
export type FavoriteAnnotationsQueryResult = Apollo.QueryResult<FavoriteAnnotationsQuery, FavoriteAnnotationsQueryVariables>;
export const GetVerseDocument = gql`
    query GetVerse($id: ID!) {
  verse(id: $id) {
    ...Verse
  }
}
    ${VerseFragmentDoc}`;

/**
 * __useGetVerseQuery__
 *
 * To run a query within a React component, call `useGetVerseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVerseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVerseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVerseQuery(baseOptions: Apollo.QueryHookOptions<GetVerseQuery, GetVerseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVerseQuery, GetVerseQueryVariables>(GetVerseDocument, options);
      }
export function useGetVerseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVerseQuery, GetVerseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVerseQuery, GetVerseQueryVariables>(GetVerseDocument, options);
        }
export type GetVerseQueryHookResult = ReturnType<typeof useGetVerseQuery>;
export type GetVerseLazyQueryHookResult = ReturnType<typeof useGetVerseLazyQuery>;
export type GetVerseQueryResult = Apollo.QueryResult<GetVerseQuery, GetVerseQueryVariables>;
export const MyCollectionAnnotationsDocument = gql`
    query MyCollectionAnnotations($first: Int!, $after: String) {
  annotations(first: $first, after: $after, isMine: true) {
    edges {
      node {
        ...Annotation
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
    ${AnnotationFragmentDoc}`;

/**
 * __useMyCollectionAnnotationsQuery__
 *
 * To run a query within a React component, call `useMyCollectionAnnotationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCollectionAnnotationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCollectionAnnotationsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useMyCollectionAnnotationsQuery(baseOptions: Apollo.QueryHookOptions<MyCollectionAnnotationsQuery, MyCollectionAnnotationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyCollectionAnnotationsQuery, MyCollectionAnnotationsQueryVariables>(MyCollectionAnnotationsDocument, options);
      }
export function useMyCollectionAnnotationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyCollectionAnnotationsQuery, MyCollectionAnnotationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyCollectionAnnotationsQuery, MyCollectionAnnotationsQueryVariables>(MyCollectionAnnotationsDocument, options);
        }
export type MyCollectionAnnotationsQueryHookResult = ReturnType<typeof useMyCollectionAnnotationsQuery>;
export type MyCollectionAnnotationsLazyQueryHookResult = ReturnType<typeof useMyCollectionAnnotationsLazyQuery>;
export type MyCollectionAnnotationsQueryResult = Apollo.QueryResult<MyCollectionAnnotationsQuery, MyCollectionAnnotationsQueryVariables>;
export const UserProfileDocument = gql`
    query UserProfile($userId: ID!) {
  user(id: $userId) {
    id
    firstName
    lastName
  }
}
    `;

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;
export const VerseAnnotationsDocument = gql`
    query VerseAnnotations($first: Int, $after: String, $verseId: ID!) {
  annotations(first: $first, after: $after, verseId: $verseId) {
    edges {
      node {
        ...Annotation
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
    ${AnnotationFragmentDoc}`;

/**
 * __useVerseAnnotationsQuery__
 *
 * To run a query within a React component, call `useVerseAnnotationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerseAnnotationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerseAnnotationsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      verseId: // value for 'verseId'
 *   },
 * });
 */
export function useVerseAnnotationsQuery(baseOptions: Apollo.QueryHookOptions<VerseAnnotationsQuery, VerseAnnotationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerseAnnotationsQuery, VerseAnnotationsQueryVariables>(VerseAnnotationsDocument, options);
      }
export function useVerseAnnotationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerseAnnotationsQuery, VerseAnnotationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerseAnnotationsQuery, VerseAnnotationsQueryVariables>(VerseAnnotationsDocument, options);
        }
export type VerseAnnotationsQueryHookResult = ReturnType<typeof useVerseAnnotationsQuery>;
export type VerseAnnotationsLazyQueryHookResult = ReturnType<typeof useVerseAnnotationsLazyQuery>;
export type VerseAnnotationsQueryResult = Apollo.QueryResult<VerseAnnotationsQuery, VerseAnnotationsQueryVariables>;
export const VersesForChapterDocument = gql`
    query VersesForChapter($bookNumber: Int!, $chapterNumber: Int!) {
  verses(bookNumber: $bookNumber, chapterNumber: $chapterNumber) {
    ...Verse
  }
}
    ${VerseFragmentDoc}`;

/**
 * __useVersesForChapterQuery__
 *
 * To run a query within a React component, call `useVersesForChapterQuery` and pass it any options that fit your needs.
 * When your component renders, `useVersesForChapterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVersesForChapterQuery({
 *   variables: {
 *      bookNumber: // value for 'bookNumber'
 *      chapterNumber: // value for 'chapterNumber'
 *   },
 * });
 */
export function useVersesForChapterQuery(baseOptions: Apollo.QueryHookOptions<VersesForChapterQuery, VersesForChapterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VersesForChapterQuery, VersesForChapterQueryVariables>(VersesForChapterDocument, options);
      }
export function useVersesForChapterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VersesForChapterQuery, VersesForChapterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VersesForChapterQuery, VersesForChapterQueryVariables>(VersesForChapterDocument, options);
        }
export type VersesForChapterQueryHookResult = ReturnType<typeof useVersesForChapterQuery>;
export type VersesForChapterLazyQueryHookResult = ReturnType<typeof useVersesForChapterLazyQuery>;
export type VersesForChapterQueryResult = Apollo.QueryResult<VersesForChapterQuery, VersesForChapterQueryVariables>;