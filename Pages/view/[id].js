import React from 'react';

function ViewPage(props) {
      const { id } = props;
      return(
            <h1>View {id}</h1>
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
      return {id};
}

export default ViewPage;