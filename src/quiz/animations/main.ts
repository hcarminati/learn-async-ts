const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

const animateAlice = async (element: HTMLElement | null) => {
  if (element) {
    await element.animate(aliceTumbling1, aliceTiming1).finished;
  } else {
    console.warn("#alice not found");
  }
};

const animateAll = async () => {
  try {
    await animateAlice(alice10);
    await animateAlice(alice20);
    await animateAlice(alice30);
  } catch (err) {
    alert(`Error when promising ... ${err.message}`);
  }
};

animateAll();
