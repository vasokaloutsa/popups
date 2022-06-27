<script>
import NavigationBtn from "./NavigationBtn";
import PopUpModal from "./PopUpModal.vue";
export default {
  name: "AboutPage",
  components: { NavigationBtn, PopUpModal },
  data() {
    return {
      isExitPopOpen: false,
      isTimePopOpen: false,
      isScrollPopOpen: false,
      windowTop: window.scrollY,
      scrollPopContent: String,
      timePop: Number,
      scrollPop: String,
    };
  },
  beforeMount() {
    this.timePop = parseFloat(this.$route.query.time) || "none";
    this.scrollPop = parseFloat(this.$route.query.time) || "none";
    this.timePop !== "none" && this.setTimer();
  },
  created() {
    this.scrollPop !== "none" &&
      window.addEventListener("scroll", this.setScroller, true);
  },
  beforeUpdate() {
    this.scrollPop !== "none" &&
      window.addEventListener("scroll", this.setScroller, true);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll, true);
  },
  methods: {
    goBack() {
      this.isExitPopOpen = true;
      setTimeout(() => this.$router.push("/"), 2000);
      clearTimeout();
    },
    setTimer() {
      const addTime = () => {
        this.isTimePopOpen = true;
        setTimeout(() => (this.isTimePopOpen = false), 2000);
        clearTimeout();
      };
      setTimeout(addTime, 1000 * 60 * parseFloat(this.timePop));
    },
    setScroller: function (e) {
      console.log(e.currentTarget.scrollY);
      console.log(e.currentTarget.scrollY === this.scrollPop);
      this.isScrollPopOpen = e.currentTarget.scrollY === this.scrollPop;
      this.scrollPopContent = `you have reached the ${
        parseFloat(this.scrollPop) / 1000
      }% of the page`;
    },
  },
};
</script>

<template>
  <div>Hello!</div>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam explicabo
    porro voluptatem ullam distinctio corrupti dicta earum sed, culpa laborum.
    Facere ipsa laborum animi corporis vitae laboriosam pariatur natus officiis
    architecto voluptates non et, ipsum dignissimos ab consectetur temporibus
    esse enim tempore at debitis error est rerum dolore? Corporis aperiam
    deserunt accusamus dignissimos, itaque sint magni pariatur doloribus omnis
    facere reiciendis! Voluptatibus nam repudiandae pariatur fugit quaerat
    repellat. Error iusto adipisci fugiat laudantium vel cumque id, dolor
    deleniti architecto maiores, mollitia iste odit earum unde voluptatum
    deserunt similique qui distinctio? Tempore accusantium cupiditate quisquam
    ut alias? Aperiam soluta qui temporibus odit consequatur. Sed voluptatibus,
    harum cupiditate, ab facere modi, repellendus voluptate cumque alias
    repellat enim aliquid sapiente quaerat excepturi. Assumenda laudantium a
    totam ullam, excepturi, sequi error ratione harum nobis vero quas!
    Distinctio repellat reprehenderit totam obcaecati ducimus voluptates dicta,
    quam quae nostrum quo, cum suscipit atque quis quibusdam. Cupiditate
    perspiciatis veritatis adipisci rem delectus sapiente aliquid, officia
    tenetur dolores veniam quo laborum eveniet assumenda libero voluptates autem
    quasi, vitae perferendis quas consequatur modi non quos. Quam fuga hic
    eaque, expedita veritatis eius soluta! Odio autem cum assumenda mollitia
    numquam debitis dolorum. A mollitia fugit temporibus maxime quaerat
    eligendi, obcaecati quas autem voluptas placeat? Repellat officiis ab
    dolorem animi voluptate, sapiente provident vitae ducimus cupiditate rem
    iste nisi, non praesentium inventore esse veniam. Culpa animi perferendis
    tenetur voluptate corporis iste nesciunt. Tempora distinctio aperiam veniam
    voluptatum et iste quia similique id minus asperiores veritatis amet velit
    magni recusandae voluptatem quidem quaerat quo, est mollitia. Iusto
    perferendis incidunt ducimus esse est ratione quaerat. Quo nemo consectetur,
    amet illum rem accusamus facere odio beatae et veniam quidem, iusto eaque
    alias fuga at repellat, molestiae corrupti in exercitationem sit
    reprehenderit dolores sequi. Voluptatibus, deleniti. Voluptatum, illum
    veritatis iste ad veniam vitae totam. Voluptatem?
  </p>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima placeat
    enim, ipsa dicta iste voluptates, corrupti ipsam consectetur quos maiores
    quae aperiam quibusdam deleniti exercitationem cum, incidunt molestias sed?
    Nihil quasi dicta impedit at molestiae dignissimos nostrum cupiditate odit
    quas recusandae suscipit, nesciunt minus inventore repudiandae a. Non unde
    animi corrupti. Cupiditate est laudantium accusamus recusandae sit ratione
    voluptatem, pariatur ut, ab, mollitia aspernatur quidem saepe optio ipsum
    eos laboriosam exercitationem possimus corporis harum eius rem eaque
    nesciunt! Dignissimos rerum ducimus incidunt soluta quaerat culpa harum
    repellat reiciendis odio vero, totam quidem pariatur, voluptatem, rem
    consequuntur necessitatibus voluptas facere! Magnam minima quam eos! Libero
    temporibus dolor, vel alias ut maxime maiores blanditiis voluptas
    laboriosam. Nisi corrupti corporis nostrum cumque totam ut doloremque
    magnam! Animi incidunt enim consectetur at nulla, quidem aliquam beatae
    autem, ipsa a optio quaerat. Repellendus, nulla rerum perferendis hic ad
    amet quae deleniti sed minima molestiae vero sunt obcaecati reiciendis minus
    at nemo quibusdam vel porro aperiam. Quam, deleniti quae provident
    distinctio sapiente vero voluptate esse ut assumenda dolore reiciendis
    aspernatur culpa voluptatem cumque, dolorem aut possimus id recusandae! Illo
    corporis provident, dolore cupiditate non praesentium rem tenetur,
    voluptates at iste, ex asperiores necessitatibus fugit quasi quod delectus
    odio accusantium illum pariatur qui exercitationem perspiciatis! Amet totam
    rerum rem error voluptatem minima? Maxime assumenda soluta rerum at quasi
    illum recusandae voluptate distinctio laborum exercitationem corrupti est
    amet officia eaque minima, incidunt provident non. Minima maxime aspernatur
    a est? Tenetur earum enim atque velit autem molestiae expedita veritatis
    sequi. Incidunt at inventore explicabo modi similique nulla earum,
    repellendus quisquam eum totam consectetur quam perspiciatis, laborum ut ab
    doloremque rerum ratione. Porro alias doloremque earum error ad voluptatibus
    nam accusantium odio sunt repudiandae sapiente mollitia, sed, eius, aperiam
    a tenetur. Assumenda saepe autem deleniti est quasi doloremque
    exercitationem labore!
  </p>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti adipisci
    earum eos sed animi corporis sit praesentium, qui facilis maxime
    perferendis, distinctio sequi exercitationem laborum omnis atque delectus
    unde officia eveniet expedita. Voluptate aut modi adipisci, quisquam
    blanditiis nostrum sequi laboriosam eaque ipsa enim delectus dignissimos
    laborum ducimus, nesciunt autem recusandae quibusdam dolorum maiores quo
    assumenda odit! Ducimus magnam facilis vero unde atque corrupti
    necessitatibus odit laudantium, ab, nesciunt rem recusandae earum magni
    voluptates quas harum amet libero, explicabo et! Nostrum placeat consequatur
    ullam. Rerum provident hic quisquam voluptate debitis nobis voluptatem
    voluptas! Aspernatur id voluptatem voluptatibus nemo ex quod consectetur ut
    minus, unde, nisi eum sed expedita animi aliquam. Aut, atque sit natus hic
    aspernatur iste alias culpa. Obcaecati porro iusto cumque, error est
    expedita beatae ad voluptatibus dolore doloribus minima officia quae
    voluptatem ullam quasi deleniti quia quidem culpa maiores iste! Sequi, iure
    nisi. Recusandae quos quia ea. Quia natus reprehenderit deserunt voluptatum,
    quasi ab eligendi placeat quos molestiae harum eaque ipsa tempora deleniti
    eum saepe nulla aliquam vero voluptates? Assumenda unde tempore provident.
    Quam in nam corrupti, laudantium veniam nisi sequi iste minima eum fugit,
    blanditiis tenetur ad reiciendis consequatur libero asperiores non nobis
    magnam ipsa expedita optio minus dolores? Iusto placeat voluptatibus
    consectetur veniam aut maiores, iste, at eligendi officiis ad, soluta vel
    error mollitia itaque nostrum dicta. Facilis nobis ab sed laboriosam illum
    odit ex perferendis excepturi. Eveniet ad perspiciatis atque? Expedita odio,
    mollitia dolorum blanditiis voluptates vitae esse assumenda unde aut
    officia. Quaerat fugit earum aut deserunt assumenda beatae eius aperiam
    dolores a ullam itaque quae, esse ea magnam harum ratione, distinctio
    sapiente provident ad vel? Quia cupiditate impedit aliquam voluptate quidem
    consectetur ducimus iure, illum magnam adipisci accusantium similique facere
    eos sit veritatis perferendis deleniti non voluptatem temporibus eligendi a
    sapiente exercitationem minus praesentium? Quam quisquam soluta non quia
    tempora id beatae recusandae! A, atque ipsam? Explicabo a vel facilis beatae
    tempora nisi, perspiciatis commodi, quo soluta architecto illum sit corporis
    hic placeat, alias accusamus voluptatibus neque earum quis consequuntur enim
    consequatur repellat delectus? Corporis rem excepturi, autem officiis error
    aspernatur at ab?
  </p>
  <NavigationBtn isBackwards @click="goBack" title="Back" />
  <PopUpModal
    v-if="isExitPopOpen"
    content="We are redirecting you to the main page..."
  />
  <PopUpModal
    v-if="isTimePopOpen"
    content="This is the time Pop Up. Will close automatically in 2 secs..."
  />
  <PopUpModal v-if="isScrollPopOpen" :content="scrollPopContent" />
</template>

<style></style>
