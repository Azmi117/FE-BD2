import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { createGift } from '../services/giftService';
import Modal from './Modal';

const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
];

const giftMapping = {
  0: 'Bunga',
  1: 'Softcase',
  2: 'Baju',
};

const WheelComponent = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setMessage('');
    }
  };

  const sendGiftData = async (prizeNumber) => {
    try {
      const prizeOption = giftMapping[prizeNumber];
      const params = { varian: prizeOption };
      await createGift(params);
      console.log('Gift sent successfully!');
    } catch (error) {
      console.error('Error sending gift:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='mt-40'>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            const selectedPrizeNumber = prizeNumber;
            setMessage(`Selamat kamu mendapatkan hadiah nomor ${selectedPrizeNumber}, silahkan cek email untuk mengetahuinya.`);
            setShowModal(true);
            sendGiftData(selectedPrizeNumber);
          }}
        />
        <div className='flex flex-col mt-3'>
          <div className='flex justify-center'>
            <button onClick={handleSpinClick} className='ms-2 bg-red-500 h-10 px-3 rounded-md text-white'>SPIN</button>
          </div>
        </div>
      </div>

      {/* Render Modal */}
      <Modal show={showModal} onClose={handleCloseModal} message={message} />
    </>
  );
};

export default WheelComponent;
