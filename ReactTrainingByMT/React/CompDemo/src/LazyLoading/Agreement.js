export default function Agreement({onAgree=f=>f}) {
    return (
      <div>
        <p>Terms and conditions</p>
        <p>These are the terms and conditions. Do you agree?</p>
        <button onClick={onAgree}>I agree</button>
      </div>
    );
  }