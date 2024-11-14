function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  
    const handleRegister = async (e) => {
      e.preventDefault();
      // API call for registration
    };
  
    return (
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input type="text" placeholder="Name"  />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="bg-green-500 text-white p-2 rounded">Register</button>
        </form>
      </div>
    );
  }
  
  export default Register;
  