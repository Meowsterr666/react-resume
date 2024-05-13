function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Abel Pineda - Creative Commons ⓒ {year}</p>
      </footer>
  );
}

export default Footer;