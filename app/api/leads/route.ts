import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";
import nodemailer from "nodemailer";

// GET ALL LEADS
export async function GET() {
  try {
    await connectDB();

    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      data: leads,
    });
  } catch (error: any) {
    console.error("Error fetching leads:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// CREATE LEAD
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      service,
      budget,
      message,
    } = body;

    if (!name || !email || !phone || !service || !budget) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const newLead = await Lead.create({
      name,
      email,
      phone,
      service,
      budget,
      message,
    });

    if (
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS
    ) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to:
            process.env.EMAIL_TO ||
            process.env.EMAIL_USER,
          subject: `New Lead: ${name} - ${service}`,
          text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Budget: ${budget}
Message: ${message || "N/A"}
          `,
        });
      } catch (emailError) {
        console.error(emailError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        lead: newLead,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating lead:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}