import React from "react";
import "./Termsandconditions.css";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Footer from "../Footer/Footer";
const Termsandconditions = () => {
  return (
    <>
      <ClientNavbar />
      <div className="Termsandconditions-container">
        <div className="Termsandconditions-container1">
          <h1> Vendor Management System (VMS) Terms and Conditions</h1>
        </div>
        <div className="Termsandconditions-container2">
          Effective Date: [22.09.2023]
          <p>
            <b>1. Acceptance of Terms</b>
            <br />
            By using our Vendor Management System (VMS), you agree to comply
            with these Terms and Conditions. If you do not agree, please refrain
            from using the VMS.
          </p>
          <p>
            <b>2. Use of the VMS</b>
            <br />
            <b> Access: </b>
            <br />
            You are authorized to access and use the VMS for managing vendor
            relationships and related purposes. <br />
            <b> User Accounts:</b>
            <br /> You may be required to create a user account. You are
            responsible for maintaining the confidentiality of your account
            information.
            <b> Compliance:</b> <br />
            You must use the VMS in compliance with all applicable laws and
            regulations.
          </p>
          <p>
            <b>3. Vendor Information</b>
            <br />
            <b> Accuracy: </b>
            <br />
            You are responsible for the accuracy of the vendor information you
            provide in the VMS.
            <b> Data Security:</b>
            <br /> We take reasonable measures to protect vendor data; however,
            we are not responsible for data breaches or unauthorized access.
          </p>
          <p>
            <b>4. Termination</b>
            <br />
            We reserve the right to terminate or suspend your access to the VMS
            at any time without notice.
          </p>
          <p>
            <b>5. Intellectual Property</b>
            <br />
            <b> Ownership:</b>
            <br /> All VMS content and intellectual property rights are owned by
            us.
            <b> Use: </b>
            <br />
            You may only use VMS content for VMS-related purposes and not for
            commercial purposes.
          </p>
          <p>
            <b>6. Privacy</b>
            <br />
            We collect and use your data in accordance with our Privacy Policy.
          </p>
          <p>
            <b>7. Limitation of Liability</b>
            <br />
            We are not liable for any indirect, incidental, or consequential
            damages related to the use of the VMS.
          </p>
          <p>
            <b>8. Indemnification</b>
            <br />
            You agree to indemnify and hold us harmless from any claims or
            losses arising from your use of the VMS.
          </p>
          <p>
            <b>9. Changes to Terms</b>
            <br />
            We may update these Terms and Conditions. Continued use of the VMS
            after changes constitutes acceptance.
          </p>
          <p>
            <b>10. Governing Law</b>
            <br />
            These Terms and Conditions are governed by [Applicable Jurisdiction]
            law.
          </p>
          <p>
            <b>11. Contact Us</b>
            <br />
            If you have questions or concerns, contact us at [Your Contact
            Information]. This condensed version of VMS Terms and Conditions
            provides a general framework for user agreements within a Vendor
            Management System. Customize it to your specific VMS and consult
            with legal professionals to ensure compliance with all relevant laws
            and regulations.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Termsandconditions;
