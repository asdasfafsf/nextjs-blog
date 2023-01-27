import ErrorNext from 'next/error'

function Error({ statusCode }) {
    return (
    //   <p>
    //     {statusCode
    //       ? `An error ${statusCode} occurred on server`
    //       : 'An error occurred on client'}
    //   </p>
        <ErrorNext statusCode={statusCode} />
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error