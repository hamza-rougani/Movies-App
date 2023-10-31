import React from 'react'

function Profile() {
  return (
    
    <section className="h-100 gradient-custom-2">
    <div className="container py-5 h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col col-lg-9 col-xl-10 ">
          <div className="card">
            <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: '#000',height:'200px'}}>
              <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
                <img src="https://www.wetap.in/zltimes/uploads/images/user/no-user.png"
                  alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                  style={{width: "150px", zIndex: "1"}}/>
                <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                  style={{zIndex: '1'}}>
                  Edit profile
                </button>
              </div>
              <div className="ms-3" style={{marginTop: "130px"}}>
                <h5>HAMZA ROUGANI</h5>
                <p>AGADIR</p>
              </div>
            </div>
            <div className="p-4 text-black" style={{backgroundColor: "#f8f9fa"}}>
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <p className="mb-1 h5">253</p>
                  <p className="small text-muted mb-0">Saved</p>
                </div>
                <div className="px-3">
                  <p className="mb-1 h5">1026</p>
                  <p className="small text-muted mb-0">Favorite</p>
                </div>
                <div>
                  <p className="mb-1 h5">478</p>
                  <p className="small text-muted mb-0">Like</p>
                </div>
              </div>
            </div>
            <div className="card-body p-4 text-black">
              <div className="mb-5">
                <p className="lead fw-normal mb-1">Genres</p>
                <div className="p-4" style={{backgroundColor: "#f8f9fa"}}>
                  <p className="font-italic mb-1">Action</p>
                  <p className="font-italic mb-1">Drama</p>
                  <p className="font-italic mb-0">Comedy</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="lead fw-normal mb-0">Saved Movies</p>
                <p className="mb-0"><a href="#!" class="text-muted">Show all</a></p>
              </div>
              <div className="row g-2">
                <div className="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                    alt="image 1" class="w-100 rounded-3"/>
                </div>
                <div className="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                    alt="image 1" class="w-100 rounded-3"/>
                </div>
              </div>
              <div className="row g-2">
                <div className="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                    alt="image 1" class="w-100 rounded-3"/>
                </div>
                <div className="col">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                    alt="image 1" class="w-100 rounded-3"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Profile