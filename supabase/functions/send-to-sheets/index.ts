import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  timestamp: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-to-sheets function");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get("GOOGLE_SHEETS_WEBHOOK_URL");
    
    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({ error: "Google Sheets webhook URL not configured" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const formData: ContactFormData = await req.json();
    console.log("Form data received:", { 
      name: formData.name, 
      email: formData.email,
      phone: formData.phone,
      company: formData.company || "N/A",
      messageLength: formData.message?.length 
    });

    // Send data to Google Sheets via Apps Script webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: formData.name,
        email: formData.email,
        telefono: formData.phone,
        empresa: formData.company || "N/A",
        mensaje: formData.message,
        fecha: formData.timestamp,
      }),
    });

    console.log("Google Sheets webhook response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from Google Sheets webhook:", errorText);
      throw new Error(`Google Sheets webhook error: ${response.status}`);
    }

    console.log("Data successfully sent to Google Sheets");

    return new Response(
      JSON.stringify({ success: true, message: "Data sent to Google Sheets" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-to-sheets function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
