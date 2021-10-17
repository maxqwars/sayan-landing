import { Parallax, FormSelect, Sidenav } from 'materialize-css'

document.addEventListener('DOMContentLoaded', function() {
  /* Init side navigation */
  Sidenav.init(document.querySelectorAll('.sidenav')[0])

  /* Init parallax */
  Parallax.init(document.querySelectorAll('.parallax')[0])
})