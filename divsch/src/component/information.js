import React, { Component } from 'react'
import '../css/information.css'
import { CarouselProvider, Slider, Slide, ButtonBack, Dot,ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class information extends React.Component {
  
  render() {
    return (
       <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={68}
        totalSlides={6}
        orientation	={"vertical"}
      >

        <div className="dotcontainer">
          <Dot className="dotbutton" slide={0}/>
          <Dot className="dotbutton"slide={1}/>
          <Dot className="dotbutton"slide={2}/>
          <Dot className="dotbutton"slide={3}/>
          <Dot className="dotbutton"slide={4}/>
          <Dot className="dotbutton"slide={5}/>

        </div>
        
        <Slider>
          <Slide index={0}>  
            <h2><i>Only 7 Black Students Got Into Stuyvesant, N.Y.’s Most Selective High School, Out of 895 Spots</i></h2>
              <h3>These numbers come despite Mayor Bill de Blasio’s vow to diversify the specialized high schools, 
              which have long been seen as a ticket for low-income and immigrant students to enter the nation’s best colleges and 
              embark on successful careers.
            </h3>
          </Slide>
          <Slide index={1}>
            <h2><i>That's why we're using NYC Open Data</i></h2>
              <h3>Using an open dataset provided by the City of New York, we're visualizing educational attainment in NYC's 
              public high schools by looking at post-secondary enrollment after 18 months to track how many kids enroll in, stay in, and succeed in college.
           </h3>
            <img id="nycopen" src="https://data.cityofnewyork.us/api/assets/3FF54443-CD9C-4E56-8A20-8D2BD245BD1A?nyclogo300.png" />
            
          </Slide>
      
          <Slide index={2}>
            <h2><i>Our metrics</i></h2>
              <h3>The New York City Department of Education defines a school that is "racially representative" as a school where
              Black and Hispanic students make up between 50 and 90% of students. Overall, Black and Hispanic students make up 70% of NYC 
              public school students. Based on this information, we computed a Diversity Index measuring the difference between the
              proportions of Black and Hispanics in the NYC public school system in general and at that school. 1 indicates a school that is
              very racially representative, whereas 0 indicates a school that is completely homogenous.
              Post-Secondary Enrollment refers to the percentage of students enrolled in a post-secondary institution (2- or 4-year college)
              18 months after their high school graduation. Its cube corresponds to the size of the circle.
           </h3>
            
          </Slide>
          <Slide index={3}>
            <h2><i>We found that high schools that are more racially representative of NYC (50-90% Black and Hispanic) are not guaranteed to have higher academic performance.</i></h2>
            <h3>
              This was surprising, seeing as the overwhelming consensus amongst educators is that more diverse environments promote 
              achievement for students of all backgrounds. This shows that NYC has a long way to go when it comes to serving its minority students.
           </h3>
          </Slide>
          <Slide index={4}>
            <h2><i>Why is this true?</i></h2>
            <h3>
              There are multitude of factors that lead to this. Based on academic research, Black and Hispanic students are more likely to be economically disadvantaged,
              as measured by the percentage of students receiving free or reduced-price lunches, students experiencing homelessness, and 
              family income. They are also more likely to be the first in their family to attend college. All of these metrics correlate to lower
              college enrollment. Future data exploration would include looking at income levels in addition to diversity metrics to determine a link between socioeconomic status and educational achievment.
           </h3>
          </Slide>
          <Slide index={5}>
            <h2><i>How did we build this?</i></h2>
            <h3 id="page5">
                We building an webapp hosted on heroku, a cloud platform that can host and deploy Javascript. The framework we used for building a front-end webpage is 
                React. The plots were constructed using Plot.ly, an open source python graphing library.
                We used the "2017-18 Diversity Report 9-12 School" from NYC Open Data. We scraped the <a href="https://tools.nycenet.edu/dashboard/" alt="">NYCDOE School Performance Dashboard </a> using a Python 
                script to retrieve College Readiness Index, Post-Secondary Enrollment after 18 months, and College Persistence. The size of the
                circle corresponds to the cube of the Post-Secondary Enrollment value to accentuate the differences.
            </h3>
            <img id="reactlogo"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
            <img id="herokulogo" src="https://miro.medium.com/max/3600/1*fIjRtO5P8zc3pjs0E5hYkw.png" />
            <img id="plotlylogo" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Plotly-logo-01-square.png"/>
           </Slide>
        </Slider>
        <ButtonBack class="progressbutton" id="back">&#x27F5;</ButtonBack>
        <ButtonNext  class="progressbutton" id="next">&#x27F6;</ButtonNext>
      </CarouselProvider>
    /*  <div id="informationmain">
          <div className="slide" id="slide1">
            
          </div>   
      </div>  */
    );
  }
}

export default information
