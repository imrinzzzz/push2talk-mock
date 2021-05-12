export const isWhitelist = async (uid: string) => {
  // using ORM to interact with database
  const getWhitelisted = orm.whitelist.find({
    where: {
      id: uid,
    },
  });
  return true ? getWhitelisted != null : false;
};
