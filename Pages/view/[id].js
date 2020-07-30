import React from 'react';

function ViewPage(props) {
      const { data } = props;
      console.log(data);
      return(
            <h3>
                  {data ? 'Data fetched from local storage':'No data stored in local storage'}
            </h3>
      )
}

ViewPage.getInitialProps = async (props) => {
      const { id } = props.query;
      /* 
            1.return id for now.
            2. then depending on id retrieve appropriate thing 
                  ---> id = gpa (get gpa from local storage and return it as a prop)
                  ---> id = cgpa (get cgpa from local storage and return it as a prop)
      */ 
      const storedValue = window.localStorage.getItem(id);
      const data = storedValue ? JSON.parse(storedValue) : null;
      return { data };
}

export default ViewPage;