import React from 'react';
import "../Assets/CSS/404.css"

function Error() {

  return (
    <div className='error'>
      <section class="error_section">
        <p class="error_section_subtitle">Opps Page is not available !</p>
        <h1 class="error_title">
          <p>404</p>
          404
        </h1>
        <a href="https://sharaaninfo.com/" class="btn">Back to home</a>
      </section>
    </div>
  );
}

export default Error;
