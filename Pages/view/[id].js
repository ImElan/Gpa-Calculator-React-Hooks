import React from 'react';
import Results from '../../src/Containers/Results/Results';

function ViewPage(props) {
      const { data } = props;
      console.log(data);
      return(
            <Results data={data} />
      )
}

ViewPage.getInitialProps = async (props) => {
      const { id } = props.query;
      const storedValue = window.localStorage.getItem(id);
      const data = storedValue ? JSON.parse(storedValue) : null;
      return { data };
}

export default ViewPage;

// -> done
/* 
      1.return id for now.
      2. then depending on id retrieve appropriate thing 
            ---> id = gpa (get gpa from local storage and return it as a prop)
            ---> id = cgpa (get cgpa from local storage and return it as a prop)
*/ 