import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58383.766620639064!2d90.33034243616555!3d23.85465169837346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c1003a9a343b%3A0x6d7d62f4c8846795!2sPLOT%2302%2C%20ROAD%2306%2FA%2C%20BLOCK%23J%2C%20SINGAPORE%20HOUSING%20LTD%2C%20Dhaka!3m2!1d23.8546572!2d90.3716279!5e0!3m2!1sen!2sbd!4v1760529092320!5m2!1sen!2sbd"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </>
  );
}
