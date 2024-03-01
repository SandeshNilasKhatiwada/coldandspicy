import React from 'react';

function TheAdminSetting() {
  return (
    <div className="flex m-[5%]">
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-purple-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">General Settings</h2>
            <ul className="list-disc list-inside">
              <li>Language: English</li>
              <li>Timezone: UTC+0</li>
              <li>Date Format: MM/DD/YYYY</li>
              <li>Notifications: On</li>
            </ul>
          </div>
          <div className="bg-blue-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Security Settings</h2>
            <ul className="list-disc list-inside">
              <li>Password Strength: Strong</li>
              <li>Two-Factor Authentication: Enabled</li>
              <li>Security Alerts: On</li>
            </ul>
          </div>
          <div className="bg-yellow-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Billing Information</h2>
            <ul className="list-disc list-inside">
              <li>Plan: Premium</li>
              <li>Next Billing Date: 15th March 2024</li>
              <li>Payment Method: Visa **** 1234</li>
            </ul>
          </div>
          <div className="bg-green-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Account Settings</h2>
            <ul className="list-disc list-inside">
              <li>Name: John Doe</li>
              <li>Email: john@example.com</li>
              <li>Username: johndoe123</li>
            </ul>
          </div>
          <div className="bg-pink-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Appearance Settings</h2>
            <ul className="list-disc list-inside">
              <li>Theme: Dark Mode</li>
              <li>Font Size: Medium</li>
              <li>Accent Color: #6B46C1</li>
            </ul>
          </div>
          <div className="bg-orange-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Integration Settings</h2>
            <ul className="list-disc list-inside">
              <li>Google Analytics: Connected</li>
              <li>Facebook Pixel: Connected</li>
              <li>Mailchimp: Not Connected</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheAdminSetting;
