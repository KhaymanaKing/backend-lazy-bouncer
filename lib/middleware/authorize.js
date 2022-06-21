module.exports = async (req, res, next) => {
  try { 
    if (!req.user || req.ueser.email !== 'admin')
      throw new Error('You do not have access to view this page');
    next();
  } catch (err){
    err.status = 403;
  }
};
