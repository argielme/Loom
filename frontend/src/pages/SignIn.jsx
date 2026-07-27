
function SignIn() {
  function handleSignIn(event) {
    event.preventDefault();

  }

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default SignIn;
