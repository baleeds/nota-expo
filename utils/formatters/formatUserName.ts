export const formatUserName = (user: { firstName?: string | null; lastName?: string | null } | undefined | null) => {
  return [user?.firstName, user?.lastName].join(' ') ?? '-';
};
