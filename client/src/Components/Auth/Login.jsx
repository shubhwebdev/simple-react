
const Login = () => {
  return (
   <section className="login p-5 ml-auto">
    <div className="flex items-center flex-wrap">
      <h5 className="mr-2">Login to your account</h5>
      <form className="flex items-center flex-wrap">
        <div className="form-group">
          <input type="email" className="border rounded-md border-gray-300 px-4 py-2 focus:outline-purple-600" placeholder="Email" />
        </div>
        <div className="form-group ml-2 mr-2">
          <input type="password" className="border rounded-md border-gray-300 px-4 py-2 focus:outline-purple-600" placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="submit" className="border rounded-md border-gray-300 px-4 py-2 focus:outline-purple- bg-purple-600" value="Log in" />
        </div>
      </form>
    </div>
   </section>
  )
} 

export default Login;