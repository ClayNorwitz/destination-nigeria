import styles from "@/app/styles";

const VideoSection = () => {
  return (
    <div
      className={`${styles.boxWidth} pt-20 relative overflow-hidden  mx-auto`}
    >
      <div className="flex items-center justify-center">
        <video controls loop className="object-cover w-full h-96">
          <source src="/video/d30-video.invitation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
