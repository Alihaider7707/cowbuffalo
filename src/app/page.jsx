import React from "react";

const page = () => {
  return (
    <section>
      <div className='row'>
        <div className='logo'>
          <img
            src='https://i.pinimg.com/564x/77/93/54/7793547f64b9a9560ab993d8ae3bfd58.jpg'
            alt=''
          />
        </div>
      </div>
      <div className='container'>
        <div className='box-flex'>
          <div className='box '>
            <div>
              <label>First Name:</label>
            </div>

            <input
              type='name'
              placeholder='First Name'
              autoComplete='off'
            />
          </div>
          <div className='box '>
            <div>
              <label>Second Name:</label>
            </div>

            <input
              type='name'
              placeholder='Second Name'
              autoComplete='off'
            />
          </div>
        </div>

        <div>
          <div className='contact'>
            <h3>Contact:</h3>
          </div>
          <div className='address-flex address'>
            <textarea
              name=''
              id=''
              cols='30'
              rows='2'></textarea>
            <select>
              <option>Johar Town</option>
            </select>
          </div>
        </div>

        <div className='note'>
          <h3>Note:</h3>
          <textarea
            name=''
            id=''
            cols='30'
            rows='5'></textarea>
        </div>

        <div className='quatiymilk quatiymilkflex '>
          <h3>Quality of Milk:</h3>
          <select>
            <option>00-00</option>
            <option>01-00</option>
            <option>02-00</option>
            <option>03-00</option>
            <option>04-00</option>
            <option>05-00</option>
            <option>06-00</option>
            <option>07-00</option>
            <option>08-00</option>
            <option>09-00</option>
          </select>
        </div>

        <div className='selection'>
          <h3>Selection:</h3>

          <option>Daily</option>
          <select>
            <option>somedays</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </div>

<div className="time">
  <h3 >Time:</h3>
  <h4>Morning: 
    <span>9:00 AM</span>
  </h4>
  <h4>Evening: 
    <span>7:00 PM</span>
  </h4>
</div>

      </div>
    </section>
  );
};

export default page;
