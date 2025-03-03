

class homePage extends HTMLElement {
    constructor() {
        super()
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render()
    }

    _updateStyle() {
        this._style.textContent = `
 body {
    margin: 0;
    font-family:"poppins",arial;
}

      main {
        height: 100%;
      }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: top 0.3s;
  }

  header .logo img {
    height: 50px;
    padding-left: 14px;
  }

  .hamburger-menu {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-right: 55px;
  }

  .nav-center {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
    flex-grow: 1;
    justify-content: center;
  }

  .nav-center li {
    display: flex;
    align-items: center;
  }

  .nav-center li a:hover {
    color: #55E93D;
  }

  .nav-center li a {
    text-decoration: none;
    color: #000;
  }

  .nav-right {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav-right .user-icon {
    position: relative;
  }

  .nav-right .user-icon a img {
    height: 44px;
  }

  .hidden-nav {
    top: -100px; /* Adjust as needed to hide the navbar */
  }

.hero {
    position: relative;
    overflow: hidden;
    text-align: center;
    color: white;
    height: 100vh;
}
.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 1;
}

.carousel img {
    width: 100%;
    height: auto;
    
}

.hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.hero-text h5 {
    margin: 0;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
}

.hero-text h2 {
    width: 1000px;
    font-size: 40px;
    text-align: left;
    margin:0 0 20px 0;
}

#exploreButton {
    background-color: #4caf4f00;
    color: white;
    border: none;
    padding: 15px 38px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid #55E93D;
}

#exploreButton:hover {
    background-color: #55E93D;
    box-shadow: #21ef00 0px 7px 29px 0px;
}

/* content */
.content {
    padding: 20px 40px;
    height: 100vh;
    
  }
  
  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .title h3{
    font-size: 38px;
    color: #007D46;
    margin-bottom: 30px;
  }
  
  .search-input {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .search-input input {
    padding: 10px 10px 10px 43px; /* add padding to leave space for icon */
    font-size: 16px;
    border: 1px solid #D6FFED;
    border-radius: 12px;
    background-color: #D6FFED;
    color: #007D46;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  
  .search-input .material-symbols-outlined {
    position: absolute;
    left: 10px;
    font-size: 22px;
    color: #007D46;
  }

  .search-input input:focus {
    box-shadow: none;
    border:none;
    outline: none;
  } 

  .category-list {
    display: flex;
    gap: 10px;
    margin-bottom: 40px;
  }
  
  .category {
    padding: 10px 20px;
    background-color: #ffffff00;
    color: #3CC226;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid #3CC226;
  }
  .category.active{
    background-color: #3CC226;
    color: #fff;
  }
  
  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .card {
    position: relative;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    width: calc(23% - 20px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  
  .card-img-container {
    position: relative;
    width: 100%;
    height: 85%;
    border-radius: inherit;
    overflow: hidden;
  }
  
  /* Gambar dalam container */
  .card-img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .card-img-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    border-radius: inherit;
  }

  .card h4 {
    position: absolute;
    top: 60%;
    left: 5%;
    font-size: 20px;
    color: #ffffff;
    font-weight: 400;
  }
  
  .card p {
    padding: 10px 10px 10px;
    text-align: right;
    font-size: 14px;
    color: #007D46;
    margin: 0;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }
  
  .page {
    padding: 5px 10px;
    background-color: #007bff00;
    color: #007D46;
    border: 1px solid #007D46;
    border-radius: 5px;
    cursor: pointer;
  }
  .page.active {
    background-color: #007D46;
    color: #fff;
  }


  /* rekomendasi */
  .rekomendasi-destinasi {
    text-align: center;
    padding: 20px 40px;
    position: relative;
    background-color: #f4fff3;
    height: 100vh;
    margin-top: 150px;
  }
  
  .rekomendasi-destinasi h3 {
    font-size: 38px;
    text-align: left;
    margin-bottom: 0;
    color: #007D46;
  }
  
  .rekomendasi-destinasi p {
    margin: 0 0 50px 0;
    font-size: 14px;
    color: #007D46;
    text-align: left;
  }
  
  .destinasi-slider {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .destinasi-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 340px;
    height: 400px;
    text-align: left;
    overflow: hidden;
    position: relative;
  }
  
  .destinasi-card img {
    width: 100%;
    height: 281px;
    object-fit: cover;
    border-radius: inherit;
  }
  
  .destinasi-info {
    padding: 15px;
  }
  
  .destinasi-info h4 {
    font-size: 18px;
    color: #333;
    margin: 0;
  }
  
  .destinasi-info p {
    font-size: 14px;
    color: #888;
    margin: 5px 0;
  }
  
  .destinasi-info .price-content{
    display: block;
    text-align: right
  }

  .destinasi-info .price {
    font-size: 14px;
    padding: 2px 6px;
    border-radius: 7px;
    color: #ffffff;
    font-weight: 500;
    background-color: #1f8a70;
    
  }
  
  .slider-controls {
    position: absolute; /* Menjadikan posisi absolut */
    top: 72px; /* Jarak dari atas */
    right: 40px; /* Jarak dari kanan */
    z-index: 1; /* Menetapkan z-index agar tetap di atas card */
  }
  
  .slider-controls button {
    background: #1f8a70;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 40px;
    height: 30px;
    font-size: 18px;
    cursor: pointer;
  }
  
  .slider-controls button:hover {
    background: #155a4f;
  }


  /* footer */

    .footer {
            background-color: #00b167;
            color: white;
            text-align: center;
            padding: 30px 0;
            position: relative;
        }
        .footer .menu {
            display: flex;
            justify-content: center;
            list-style: none;
            padding: 0;
            margin: 0 0 20px 0;
        }
        .footer .menu li {
            margin: 0 15px;
        }
        .footer .menu a {
            color: white;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
        }
        /* .footer .menu a:hover{
          font-weight: 800;
        } */
        .footer .social-media {
            margin-bottom: 20px;
            position: absolute;
            top: 25%;
            right: 30px;
        }
        .footer .social-media a {
            margin: 0 10px;
            color: white;
            text-decoration: none;
            font-size: 36px;
        }
        .footer .social-media a i {
            vertical-align: middle;
        }
        .footer .copyright {
            font-size: 14px;
            font-weight: 400;
            color: #e6e6e6 ;
        }
        .footer .logo {
            position: absolute;
            top: 25%;
            left: 40px;
        }
        .footer .logo img {
            width: 140px;
            height: auto;
        }


@media (max-width: 768px) {
    .nav-center {
        display: none;
        flex-direction: column;
        background-color: #fff;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .nav-center.show {
        display: flex;
    }

    .hamburger-menu {
        display: block;
    }
}

        `
    }

    render() {
        this._updateStyle()

        this.innerHTML = `
        <section class="hero">
        <div class="carousel">
          <div><img src="..//public/images/heros/sungai sekonyer.jpg" alt="Hero Image 1" /></div>
          <div><img src="..//public/images/heros/tanjung-puting.jpg" alt="Hero Image 2" /></div>
          <div><img src="..//public/images/heros/sabari.jpg" alt="Hero Image 3" /></div>
        </div>
        <div class="hero-text">
          <h5>Selamat datang Di</h5>
          <h2>Website Kalteng Explore - Wisata berkelanjutan</h2>
          <button id="exploreButton">Explore Sekarang</button>
        </div>
      </section>
      <!-- content -->
      <section id="content" class="content">
        <div class="content-header">
          <div class="title">
            <h3>Destinasi Wisata</h3>
          </div>
          <div class="search-input">
            <span class="material-symbols-outlined" id="searchIcon">search</span>
            <input type="text" id="searchInput" placeholder="Cari destinasi..." />
          </div>
        </div>
        <div class="category-list" id="categoryContainer">
          <!-- Kategori akan di-generate secara dinamis oleh JavaScript -->
        </div>
        <div class="card-list" id="cardContainer"></div>
        <div id="paginationContainer" class="pagination"></div>
      </section>
      <!-- end section -->
      <!-- Rekomendasi Destinasi Wisata Section -->
      <section id="rekomendasi" class="rekomendasi-destinasi">
        <h3>Rekomendasi Destinasi Wisata</h3>
        <p>Temukan Tempat Wisata ternyaman versi kamu..</p>
        <div class="destinasi-slider" id="sliderContainer">
          <!-- Destinasi card akan di-generate oleh JavaScript -->
        </div>
        <div class="slider-controls">
          <button class="prev" >&#10094;</button>
          <button class="next" >&#10095;</button>
        </div>
      </section>`

        this.append(this._style)
    }    
    
}

customElements.define('home-page', homePage)