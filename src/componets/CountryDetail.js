import React from 'react';

const CountryDetail = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Country Information */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <img className="w-full h-72 object-cover" src="post-photo.jpg" alt="Post Fotoğrafı" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Post Başlığı</h1>
          <p className="text-gray-600 text-lg mb-4">Post summary... Lorem ipsum dolor sit amet.</p>
          <div className="text-sm text-gray-500 flex justify-between items-center mb-4">
            <span>Tarih: 01/01/2024</span>
            <span>Ülke: Türkiye</span>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <img className="w-10 h-10 rounded-full" src="user-profile.jpg" alt="User Profile" />
            <div>
              <p className="font-medium text-gray-900">Kullanıcı Adı</p>
              <p className="text-sm text-gray-500">Yorum: 5, Okunma: 123</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Yorumlar</h2>
        {/* Comments List */}
        <div className="space-y-4 mb-6">
          {/* Single Comment */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">Bu çalışma harika görünüyor!</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <span>Yazan: Kullanıcı Adı</span>
              <span>Tarih: 02/01/2024</span>
            </div>
          </div>
          {/* Other Comments can be added here */}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
