import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [doctor, setDoctor] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [nurse, setNurse] = useState("");
  const [Case] = useState("CAS1779344205");
  const [encounter] = useState("ENC1779344205");
  const [paymode, setPaymode] = useState("Cash");
  const [paystatus, setPaystatus] = useState("");

  return (
    <div className="appointment-form">
      {/* Header */}
      <div className="header">
        <select className="select-patient">
          <option>Select Patient</option>
          <option>John</option>
          <option>Mary</option>
        </select>
        <button className="new-patient">+ New Patient</button>
      </div>

      {/* Form */}
      <form>
        {/* Row 1 */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Date <span className="required">*</span>
            </label>
            <div className="input-icon">
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <span className="icon">📅</span>
            </div>
          </div>

          <div className="form-group">
            <label>
              Time Range <span className="required">*</span>
            </label>
            <div className="input-icon">
              <input
                type="text"
                placeholder="09:00 AM - 10:00 AM"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <span className="icon">⏰</span>
            </div>
          </div>

          <div className="form-group">
            <label>
              Patient Name <span className="required">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="form-group">
            <label>Gender</label>
            <select>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>
              Phone <span className="required">*</span>
            </label>
            <input
              type="tel"
              placeholder="1234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Doctor <span className="required">*</span>
            </label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            >
              <option>-- Select Doctor --</option>
              <option>George William</option>
              <option>Helen Jones</option>
              <option>Kofi Owusu Boahene</option>
              <option>Akwasi Owusu</option>
              <option>Samuel Mensah</option>
            </select>
          </div>

          <div className="form-group">
            <label>Appointment Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>-- Select --</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Live Consultant (On Video Conference){" "}
              <span className="required">*</span>
            </label>
            <select>
              <option>-- Select --</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div className="form-row">
          <div className="form-group">
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>-- Select --</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>

          <div className="form-group">
            <label>Nurse</label>
            <input
              type="text"
              value={nurse}
              onChange={(e) => setNurse(e.target.value)}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="form-row bottom-section">
          <div className="form-group">
            <label>Case Id</label>
            <input type="text" value={Case} readOnly />
          </div>

          <div className="form-group">
            <label>Encounter Id</label>
            <input type="text" value={encounter} readOnly />
          </div>

          <div className="form-group">
            <label>Payment Mode</label>
            <select
              value={paymode}
              onChange={(e) => setPaymode(e.target.value)}
            >
              <option>Cash</option>
              <option>Card</option>
              <option>Insurance</option>
            </select>
          </div>

          <div className="form-group">
            <label>Payment Status</label>
            <select
              value={paystatus}
              onChange={(e) => setPaystatus(e.target.value)}
            >
              <option>-- Select --</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
