import React, { useState } from 'react';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const renderContent = () => {
    switch (activeSection) {
      case 'orders':
        return (
          <div className="orders-section">
            <h2 className='section-title'>My Orders</h2>

            <div className="order-card">
              <img src="/assets/category/catg18.png" alt="Diamond Ring" />
              <div className="order-details">
                <h4>18K Gold Diamond Ring</h4>
                <p><strong>Price:</strong> ₹24,999</p>
                <p><strong>Status:</strong> <span className="delivered">Delivered</span></p>
                <p><strong>Order ID:</strong> #JW998877</p>
                <p><strong>Ordered on:</strong> 20 Aug 2025</p>
                <div className="order-actions">
                  <button>View Details</button>
                  <button className='ms-1'>Track Package</button>
                </div>
              </div>
            </div>

            <div className="order-card">
              <img src="/assets/category/catg19.png" alt="Necklace" />
              <div className="order-details">
                <h4>Rose Gold Necklace</h4>
                <p><strong>Price:</strong> ₹45,499</p>
                <p><strong>Status:</strong> <span className="processing">Processing</span></p>
                <p><strong>Order ID:</strong> #JW112233</p>
                <p><strong>Ordered on:</strong> 28 Aug 2025</p>
                <div className="order-actions">
                  <button>View Details</button>
                </div>
              </div>
            </div>
          </div>
        );

        

      case 'address':
        return (
          <div className="address-section">
            <h2 className='section-title'>My Addresses</h2>

            <div className="address-card">
              <div className="address-header">
                <h4>Home</h4>
                <button className="edit-btn px-2 rounded">Edit</button>
              </div>
              <p>Simran Ahuja</p>
              <p>201, Lotus Residency, Malad West</p>
              <p>Mumbai, Maharashtra - 400064</p>
              <p>Mobile: +91 9876543210</p>
            </div>

            <div className="address-card">
              <div className="address-header">
                <h4>Office</h4>
                <button className="edit-btn px-2 rounded">Edit</button>
              </div>
              <p>Simran Ahuja</p>
              <p>12th Floor, Oberoi Commerz, Goregaon</p>
              <p>Mumbai, Maharashtra - 400063</p>
              <p>Mobile: +91 9876543210</p>
              <br/>
              <button className="add-address-btn">+ Add New Address</button>

            </div>

          </div>
        );

        case 'profile':
          return (
            <div className="profile-info">
              <h2 className="section-title">My Profile</h2> {/* 👈 Added heading here */}
              <div className="profile-header">
                <div className="profile-image-wrapper">
                  <img
                    src="/assets/category/leader01.avif"
                    alt="Profile"
                    className="profile-image"
                  />
                  <button className="upload-btn">Upload</button>
                </div>
                <div className="profile-details">
                  <h3>Simran Ahuja</h3>
                  <p>Email: simranahuja@example.com</p>
                  <p>Phone: +91 9876543210</p>
                  <p>Gender: Female</p>
                  <p>Date of Birth: 12 Jan 1995</p>
                  <button className="edit-profile-btn">Edit Info</button>
                </div>
              </div>
            </div>
          );
        
      case 'logout':
        alert('Logging out...');
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="profile-layout" style={{ marginTop: "4rem" }}>
      <aside className="custom-profile-sidebar">
        <h3>Account</h3>
        <ul>
          <li onClick={() => setActiveSection('profile')} className={activeSection === 'profile' ? 'active' : ''}>Profile Info</li>
          <li onClick={() => setActiveSection('orders')} className={activeSection === 'orders' ? 'active' : ''}>My Orders</li>
          <li onClick={() => setActiveSection('address')} className={activeSection === 'address' ? 'active' : ''}>Saved Addresses</li>
          <li onClick={() => setActiveSection('logout')} className={activeSection === 'logout' ? 'active' : ''}>Logout</li>
        </ul>
      </aside>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default ProfilePage;
