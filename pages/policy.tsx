import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from "@/styles/PolicyPage.module.scss";

const Policy = () => (
  <>
    <Header />
    <div className={styles.policyPage}>
      <h1>Our Policy</h1>
      <p>
        We are not affiliated, associated, involved, connected, indirectly,
        directly, related or a part of ARM Holdings, ARM Limited or it’s
        subsidiaries.
      </p>
      <p>The content displayed on the website is released under CCL.</p>
      <p>
        All information posted is merely for educational and informational
        purposes. It is not intended as a substitute for professional advice.
        Should you decide to act upon any information on this website, you do so
        at your own risk.
      </p>
      <p>
        While the information on this website has been verified to the best of
        our abilities, we cannot guarantee that there are no mistakes or errors.
      </p>
      <p>
        We reserve the right to withdraw, change, amend, remove, delete, and
        omit this policy at any given time, without notice. We express the same
        for the content published on this website. If you want to make sure that
        you are up to date with the latest changes, we advise you to frequently
        visit this page. We advise the same for any content we publish.
      </p>
      <p>
        By reading the content we publish, you are responsible for virus
        checking, scanning, and the security of the content and your computer or
        device that you use to view our website. Websites do occasionally, from
        time to time, get hijacked, and whilst we will take every precaution to
        ensure that our website is safe from malicious activity, we cannot
        guarantee this. By using our website, you agree to the risks involved.
      </p>
      <p>
        We may use images of ARM, our sponsors, partners, vendors, third party
        organisations or suppliers as part of the overall experience to show a
        real, behind the scenes view of our project and the progress we make
        during our journey. The use of images does not always constitute
        acceptance of any relationship. We do not advertise, promote or condone
        any logo or image throughout this website, and neither can we be
        responsible for your curiosity or self determination, if you decide that
        you may wish to independently contact these organisations. Do so at your
        own risk, we are not responsible for your actions.
      </p>
      <p>
        We do have sponsors who provide colocation facilities, not but limited
        to rack space, power, connectivity, cooling, security and associated
        services. We list sponsors on our website as those who help colocate
        fosshost / ARM64 hardware. We have agreements with all of our sponsors
        that outline the terms of the service they provide.
      </p>
      <p>
        In return, we will list them on our website as a hosting sponsor. These
        listings may generate positive PR opportunities and create sales for our
        sponsors. We are not liable, responsible, or interested in such matters,
        since these are the individual actions of our website visitors. We do
        not mediate or receive any commission or financial compensation for the
        actions of our website visitors.
      </p>
      <p>
        Sponsors may, at their sole discretion, provide further sponsorship
        opportunities, if our website visitors decide to transact with our
        sponsors. These sponsorship opportunities would effectively be in the
        form of additional rack space. There is no cash equivalent.
      </p>
      <p>
        Applications for our services are subject to the Terms and Conditions
        published at <a href="https://fosshost.org/legal">fosshost.org/legal</a>
        . ARM-64.com is purely an informational website only.
      </p>
      <p>
        We do operate analytics tracking on this website to understand our
        website visitors. These services are provided by{" "}
        <a href="https://plausible.io">plausible.io</a> that is a simple and
        privacy-friendly alternative to Google Analytics. No cookies and fully
        compliant with GDPR, CCPA and PECR. Made and hosted in the EU.
      </p>
    </div>
    <Footer />
  </>
);

export default Policy;
