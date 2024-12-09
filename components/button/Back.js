import { useRouter } from 'next/router';

export default function Back() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
    setTimeout(() => {
      const section = document.getElementById('project-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  }

  return (
    <>
        <button onClick={handleBack}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <g id="_01_align_center" data-name="01 align center">
              <path d="M24,13l0-2-21.445.031L6.877,6.707,5.463,5.293.877,9.879a3,3,0,0,0,0,4.242l4.586,4.586,1.414-1.414L2.615,13.031Z" /></g>
          </svg>
        </button>
    </>
  )
}