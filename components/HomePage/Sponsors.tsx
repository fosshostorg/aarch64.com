import styles from "@/styles/HomePage/Sponsors.module.scss";

const Sponsors = () => (
  <div className={styles.sponsors}>
    <h3>SUPPORTED BY</h3>
    <div className={styles.list}>
      <a
        href="https://amperecomputing.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/sponsors/ampere.png" alt="Ampere Computing" />
      </a>
      <a
        href="https://www.custodiandc.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/sponsors/custodian.svg" alt="Custodian DC" />
      </a>
      <a
        href="https://hivedatacenter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/sponsors/hive.svg" alt="Hive DC" />
      </a>
      <a href="http://www.webnx.com/" target="_blank" rel="noopener noreferrer">
        <img src="/sponsors/webnx.png" alt="WebNX" />
      </a>
      <a
        href="https://infernocomms.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/sponsors/inferno.png" alt="Inferno Communications" />
      </a>
      <a
        href="http://metal.equinix.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/sponsors/equinix.svg" alt="Equinix" />
      </a>
      <a
        href="http://www.packetframe.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/sponsors/packetframe.png" alt="PacketFrame" />
      </a>
    </div>
  </div>
);

export default Sponsors;
