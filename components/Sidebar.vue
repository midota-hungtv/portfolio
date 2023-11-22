<script setup>
let isOpen = ref(false);

function toggleMenu() {
  isOpen = !isOpen;
}

function dowloadCV() {
  try {
    const link = document.createElement("a");
    link.href = "./CV.pdf";
    link.setAttribute("download", "CV_TRAN_VAN_HUNG.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar-hung.png" alt="Photo" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="TRAN VAN HUNG">TRAN VAN HUNG</h1>

        <p
          class="title text-center xl:block flex items-center justify-center gap-1"
          style="cursor: pointer"
          @click="dowloadCV"
        >
          <span class="xl:after:content-[''] after:content-[',']"
            >WEB DEVELOPER</span
          >
          <span>DOWNLOAD MY CV</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <a
            href="https://github.com/midota-hungtv"
            class="contact-link"
            target="_blank"
          >
            <div class="icon-box">
              <ion-icon name="logo-github" />
            </div>
          </a>

          <div class="contact-info">
            <p class="contact-title">Github</p>

            <a
              href="https://github.com/midota-hungtv"
              class="contact-link"
              target="_blank"
              >TRAN VAN HUNG</a
            >
          </div>
        </li>

        <li class="contact-item">
          <a
            href="https://twitter.com/Hng77767866"
            class="contact-link"
            target="_blank"
          >
            <div class="icon-box">
              <ion-icon name="logo-twitter" />
            </div>
          </a>

          <div class="contact-info">
            <p class="contact-title">Twitter</p>

            <a
              href="https://twitter.com/Hng77767866"
              class="contact-link"
              target="_blank"
              >TRAN VAN HUNG</a
            >
          </div>
        </li>

        <li class="contact-item">
          <a
            href="https://linkedin.com/in/tran-van-hung-7b37301a9"
            class="contact-link"
            target="_blank"
          >
            <div class="icon-box">
              <ion-icon name="logo-linkedin" />
            </div>
          </a>

          <div class="contact-info">
            <p class="contact-title">Linkedin</p>

            <a
              href="https://linkedin.com/in/tran-van-hung-7b37301a9"
              class="contact-link"
              target="_blank"
              >TRAN VAN HUNG</a
            >
          </div>
        </li>

        <li class="contact-item">
          <a
            href="https://www.google.com/maps/place/Vi%E1%BB%87t+Nam/@15.7939252,105.9102589,6z/data=!3m1!4b1!4m6!3m5!1s0x31157a4d736a1e5f:0xb03bb0c9e2fe62be!8m2!3d14.058324!4d108.277199!16zL20vMDFjcmQ1?entry=ttu"
            class="contact-link"
            target="_blank"
          >
            <div class="icon-box">
              <ion-icon name="location-outline" />
            </div>
          </a>

          <div class="contact-info">
            <p class="contact-title">Location</p>
            <a
              href="https://www.google.com/maps/place/Vi%E1%BB%87t+Nam/@15.7939252,105.9102589,6z/data=!3m1!4b1!4m6!3m5!1s0x31157a4d736a1e5f:0xb03bb0c9e2fe62be!8m2!3d14.058324!4d108.277199!16zL20vMDFjcmQ1?entry=ttu"
              class="contact-link"
              target="_blank"
            >
              <address>VIETNAM</address>
            </a>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink
            to="mailto:hungtv@midota.com"
            class="social-link"
            target="_blank"
          >
            <ion-icon name="mail-outline" />
          </NuxtLink>
        </li>
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>
