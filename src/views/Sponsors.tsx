const Sponsors = () => {
  return(
    <div>
      <h1>2023 Sponsors </h1>
      <style>
          .img-container {

                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  align-items: center;
                  gap: 5px;
          }
          img {
            transition: transform 0.5s ease;
          }
          img:hover {
              transform: scale(1.25);
          }
          .img-row {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 50px;
          }
      </style>

          <div class = "img-container">
              <div class = "img-row">
                  <a href = "https://www.mathworks.com/" target = "_blank">
                      <img src="mathworks.png"  width="250" height="60" >
                  </a>
                  <a href = "https://www.cisco.com/#tabs-9cfa4a460b-item-16f5723178-tab" target = "_blank">
                      <img src="cisco.png"  width="160" height="80">
                  </a>
                  
                  
              </div>

              <div class = "img-row">
                  <a href = "https://www.csulb.edu/college-of-engineering" target="_blank">
                      <img src="coe.png" width="231" height="92" >
                  </a>
                  <a href = "https://www.interviewcake.com/" target = "_blank">
                      <img src="interviewcake.png"  width="250" height="60">
                  </a>
                  <a href = "https://www.asicsulb.org/corporate/" target = "_blank">
                      <img src="asi.png"  width="140" height="140" style="margin-bottom: 5px;">
                  </a>
                  
          
                  
              </div>
        
          </div>
      </div>
    </div>
  )
}

export default Sponsors