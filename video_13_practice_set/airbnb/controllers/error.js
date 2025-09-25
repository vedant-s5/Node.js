exports.use404page = (req,res) => {
  res.status(404).render('404', {pageTitle: 'page not found.'})
}
