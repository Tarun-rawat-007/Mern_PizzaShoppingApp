import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
const UserInfo = ({ email, image, name }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const payNow = () => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Replace with your actual key
      amount: 1000, // ₹10.00
      currency: "INR",
      name: "Acme Corp",
      description: "Pizza Order",
      image: "https://example.com/image/rzp.jpg", // Optional image
      prefill: {
        email: email || "tarun@example.com",
        contact: "+919900000000",
      },
      handler: function (response) {
        toast.success(`Payment Successful! ✅: ${response.razorpay_payment_id}`);
        setPaymentSuccess(true);
      },
      modal: {
        ondismiss: function () {
          if (confirm("Are you sure you want to cancel the payment?")) {
            console.log("Payment cancelled by user.");
          } else {
            console.log("Continue with the payment.");
          }
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '400px', borderRadius: '15px' }}>
        <img
          src={image}
          className="card-img-top rounded-top"
          alt="User"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <div className="form-group mb-3">
            <label className="fw-bold">Email:</label>
            <p className="form-control bg-light">{email}</p>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="name" className="fw-bold">Name:</label>
            <input
              value={name}
              className="form-control"
              type="text"
              placeholder="Enter your name"
              readOnly
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="address" className="fw-bold">Address:</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter your address"
            ></textarea>
          </div>
          <div className="d-grid">
            {!paymentSuccess ? (
              <button onClick={payNow} className="btn btn-primary">
                Pay Now
              </button>
            ) : (
              <div className="text-success fw-bold text-center">Payment Successful! 🎉</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
