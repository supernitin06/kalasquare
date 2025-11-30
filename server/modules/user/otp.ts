import twilio from 'twilio';


const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOTP = async (to: string, otp: string) => {
  const fromPhone = process.env.TWILIO_PHONE;
  if (!fromPhone) throw new Error("TWILIO_PHONE not set");

  const message = await client.messages.create({
    body: `Your OTP code is: ${otp}`,
    from: fromPhone,
    to: to,
  });

  return message;
};
