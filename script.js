function onclicked(){
gsap.to(".heading", {
  x: -120,
  duration: 1,

  onComplete: function () {
    gsap.to(".main", {
      duration: 1.5,
      y: 400,
      scale: 0,
      opacity: 0,
      ease: "power1.inOut",
      onComplete: function () {
        gsap.to(".nav-second", {
          duration: 1,
          y: 500,
          scale: 0,
          opacity: 0,
          ease: "power1.inOut",
          onComplete: function () {
            gsap.to(".hero", {
              duration: 1.5,
              scale: 0,
              opacity: 0,
              ease: "power1.inOut",
              onComplete: function () {
                gsap.to(".image", {
                  duration: 1.5,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 900,
                  ease: "power1.inOut",
                  onComplete: function () {
                    gsap.to(".image", {
                      duration: 1.5,
                      scale: 1.5,
                      opacity: 0,
                      ease: "power1.inOut",
                      onComplete: function () {
                        gsap.to(".image", {
                          duration: 1.5,
                          opacity: 1,
                          scale: 1.5,
                          onComplete: function () {
                            gsap.to(".image", {
                              duration: 1.5,
                              scale: 1,
                              top: "0%",
                              left: "0%",
                              transform: "none",
                              zIndex: "auto",
                              ease: "power1.inOut",
                              onComplete: function () {
                                gsap.to(".image", {
                                  position: "static",
                                  onComplete: function () {
                                    document.querySelector(
                                      ".leftblock"
                                    ).style.display = "none";
                                    gsap.to(".hero", {
                                      duration: 1.5,
                                      width: "100%",
                                      height: "100%",
                                      scale: 1,
                                      opacity: 1,
                                      ease: "power1.inOut",
                                      position: "relative",
                                      onComplete: function () {
                                        document.querySelector(
                                          ".leftblock"
                                        ).style.display = "block";

                                        gsap.to(".hero", {
                                          duration: 1.5,
                                          width: "50%",
                                          height: "100%",
                                          ease: "power1.inOut",
                                          onComplete: function () {
                                            gsap.to(".leftblock", {
                                              duration: 1.5,
                                              y: 0,
                                              scale: 1,
                                              opacity: 1,
                                              ease: "power1.inOut",
                                              onComplete: function () {
                                                gsap.to(
                                                  ".nav-second,.heading",
                                                  {
                                                    duration: 1.5,
                                                    x: 0,
                                                    y: 0,
                                                    scale: 1,
                                                    opacity: 1,
                                                    ease: "power1.inOut",
                                                    onComplete: function () {
                                                      gsap.to(".main", {
                                                        duration: 1.5,
                                                        y: 0,
                                                        scale: 1,
                                                        opacity: 1,
                                                        ease: "power1.inOut",
                                                      });
                                                    },
                                                  }
                                                );
                                              },
                                            });
                                          },
                                        });
                                      },
                                    });
                                  },
                                });
                              },
                            });
                          },
                        });
                      },
                    });
                  },
                });
              },
            });
          },
        });
      },
    });
  },
});
}