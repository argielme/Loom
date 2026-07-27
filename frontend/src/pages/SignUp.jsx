
function SignUp() {
  function handleSignUp(event) {
    event.preventDefault();

  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignUp;
