function Navbar()
{
  return (
    <nav style={{display: "flex",justifyContent:"space-between"}}>
    <h3>Perfumy</h3>
    <ul class="right_nav" >
      <li>Home |</li>
      <li>Products |</li>
      <li>About |</li>
      <li>Contact |</li>
    </ul>
    <span class="image_none"><i class="fa-solid fa-bars" style={{color: "#fcfcfc",cursor: "pointer"}}></i></span>
  </nav>
  )
}
export default Navbar