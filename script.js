// Move the image to the center, enlarge it, and fade out
// gsap.to(".image", {
//     duration: 1.5,
//     position: "absolute", // Set image to absolute
//     top: "50%", // Center vertically
//     left: "50%", // Center horizontally
//     transform: "translate(-50%, -50%)", // Proper centering
//     zIndex: 1000, // Bring the image to the front
//     ease: "power1.inOut",
//     onComplete: function () {
//       gsap.to(".image", {
//         duration: 1.5,
//         scale: 1.5, // Enlarge the image
//         opacity: 0, // Fade out the image
//         ease: "power1.inOut",
//         onComplete: function () {
//           // Reverse the animation: Fade the image back in and move it to its original position
//           gsap.to(".image", {
//             duration: 1.5,
//             opacity: 1, // Fade the image back in
//             scale: 1.5, // First increase scale to 1.5
//             onComplete: function() {
//               gsap.to(".image", {
//                 duration: 1.5,
//                 scale: 1, // Then return to original size
//                 top: "0%", // Move back to the original vertical position
//                 left: "0%", // Move back to the original horizontal position
//                 transform: "none", // Remove the centering transform
//                 zIndex: "auto",
//                 // position:'static', // Reset z-index to its original state
//                 ease: "power1.inOut",
//                 onComplete: function() {
//                     gsap.to(".image", {
//                         position:'static'
//               });
//             }
//         });
//     }
//           });
//         }
//       });
//     }
//   });

gsap.to(".heading", {
  x: -120,
  duration: 1,
  // opacity:0
  onComplete: function () {
    gsap.to(".main", {
      duration: 1.5,
      y: 400, // Move down
      scale: 0, // Shrink to zero size
      opacity: 0, // Fade out
      ease: "power1.inOut",
      onComplete: function () {
        gsap.to(".nav-second", {
          duration: 1,
          y: 500, // Move down
          scale: 0, // Shrink to zero size
          opacity: 0, // Fade out
          ease: "power1.inOut",
          onComplete: function () {
            // Shrink the .hero section after .leftblock shrinks
            gsap.to(".hero", {
              duration: 1.5,
              scale: 0, // Shrink to zero size
              opacity: 0, // Fade out
              ease: "power1.inOut",
              // 00000000000000000000000000000000000000000000000000000000000
              onComplete: function () {
                gsap.to(".image", {
                  duration: 1.5,
                  position: "absolute", // Set image to absolute
                  top: "50%", // Center vertically
                  left: "50%", // Center horizontally
                  transform: "translate(-50%, -50%)", // Proper centering
                  zIndex: 1000, // Bring the image to the front
                  ease: "power1.inOut",
                  onComplete:   function () {
                    gsap.to(".image", {
                      duration: 1.5,
                      scale: 1.5, // Enlarge the image
                      opacity: 0, // Fade out the image
                      ease: "power1.inOut",
                      //   0000000000000000000000000000000000000000000000000
                      onComplete: function () {
                        // Hide the .leftblock after shrinking
                        document.querySelector(".leftblock").style.display =
                          "none";

                        // Expand .hero to cover the full body
                        gsap.to(".hero", {
                          duration: 1.5,
                          width: "100%",
                          height: "100%",
                          scale: 1, // Restore full size
                          opacity: 1, // Fade back in
                          ease: "power1.inOut",
                          position: "relative",
                 // 00000000000000000000000000000000000000000000000000000000000000000000000000000000
                          onComplete: function () {
                            gsap.to(".image", {
                              // Reverse the animation: Fade the image back in and move it to its original position
                              duration: 1.5,
                              opacity: 1, // Fade the image back in
                              scale: 1.5, // First increase scale to 1.5
                              onComplete: function () {
                                gsap.to(".image", {
                                  duration: 1.5,
                                  scale: 1, // Then return to original size
                                  top: "0%", // Move back to the original vertical position
                                  left: "0%", // Move back to the original horizontal position
                                  transform: "none", // Remove the centering transform
                                //   zIndex: "auto", // Reset z-index to its original state
                                  ease: "power1.inOut",
                                  onComplete: function () {
                                    gsap.to(".image", {
                                      zIndex: "auto",
                                      position: "static",
                         // 000000000000000000000000000000000000000000000000000000000000000000000000000
                         // Now that the .hero is full screen, bring back the .leftblock
                                      onComplete: function () {
                                        document.querySelector(
                                          ".leftblock"
                                        ).style.display = "block";

                                        // Shrink the .hero back to its original size
                                        gsap.to(".hero", {
                                          duration: 1.5,
                                          width: "50%", // Restore original width
                                          height: "100%", // Restore original height
                                          ease: "power1.inOut",
                                          onComplete: function () {
                                            // Restore the .leftblock's original size and position
                                            gsap.to(".leftblock", {
                                              duration: 1.5,
                                              y: 0, // Move back to original position
                                              scale: 1, // Restore size
                                              opacity: 1, // Fade back in
                                              ease: "power1.inOut",
                                              onComplete: function () {
                                                gsap.to(
                                                  ".nav-second,.heading",
                                                  {
                                                    duration: 1.5,
                                                    x: 0,
                                                    y: 0, // Move back to original position
                                                    scale: 1, // Restore size
                                                    opacity: 1, // Fade back in
                                                    ease: "power1.inOut",
                                                    onComplete: function () {
                                                      // Restore the .leftblock's original     size and position
                                                      gsap.to(".main", {
                                                        duration: 1.5,
                                                        y: 0, // Move back to original position
                                                        scale: 1, // Restore size
                                                        opacity: 1, // Fade back in
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

// gsap.to(".heading", {
//     x: -120,
//     duration: 1,
//     onComplete: function () {
//       gsap.to(".main", {
//         duration: 1.5,
//         y: 400, // Move down
//         scale: 0, // Shrink to zero size
//         opacity: 0, // Fade out
//         ease: "power1.inOut",
//         onComplete: function () {
//           gsap.to(".nav-second", {
//             duration: 1,
//             y: 500, // Move down
//             scale: 0, // Shrink to zero size
//             opacity: 0, // Fade out
//             ease: "power1.inOut",
//             onComplete: function () {
//               // Shrink the .hero section after .leftblock shrinks
//               gsap.to(".hero", {
//                 duration: 1.5,
//                 scale: 0, // Shrink to zero size
//                 opacity: 0, // Fade out
//                 ease: "power1.inOut",

//                 onComplete: function () {
//                   // Move the image to the center and enlarge it
//                   gsap.to(".image", {
//                     duration: 1.5,
//                     position: "absolute", // Set image to absolute
//                     top: "50%", // Center vertically
//                     left: "50%", // Center horizontally
//                     transform: "translate(-50%, -50%)", // Proper centering
//                     zIndex: 1000, // Bring the image to the front
//                     ease: "power1.inOut",
//                     onComplete: function () {
//                       // Enlarge the image and fade it out
//                       gsap.to(".image", {
//                         duration: 1.5,
//                         scale: 1.5, // Enlarge the image
//                         opacity: 0, // Fade out the image
//                         ease: "power1.inOut",
//                         onComplete: function () {
//                           // Hide the .leftblock after shrinking
//                           document.querySelector(".leftblock").style.display = "none";

//                           // Expand .hero to cover the full body
//                           gsap.to(".hero", {
//                             duration: 1.5,
//                             width: "100%",
//                             height: "100%",
//                             scale: 1, // Restore full size
//                             opacity: 1, // Fade back in
//                             ease: "power1.inOut",
//                             position: 'relative',

//                             onComplete: function () {
//                               // Reverse the animation: Fade the image back in and scale it
//                               gsap.to(".image", {
//                                 duration: 1.5,
//                                 opacity: 1, // Fade the image back in
//                                 scale: 1.5, // First increase scale to 1.5
//                                 ease: "power1.inOut",
//                                 onComplete: function () {
//                                   gsap.to(".image", {
//                                     duration: 0.5,
//                                     scale: 1, // Then return to original size
//                                     top: "0%", // Move back to the original vertical position
//                                     left: "0%", // Move back to the original horizontal position
//                                     transform: "none", // Remove the centering transform
//                                     zIndex: "auto", // Reset z-index to its original state
//                                     ease: "power1.inOut",
//                                     onComplete: function () {
//                                       // Now that the .hero is full screen, bring back the .leftblock
//                                       document.querySelector(".leftblock").style.display = "block";

//                                       // Shrink the .hero back to its original size
//                                       gsap.to(".hero", {
//                                         duration: 1.5,
//                                         width: "50%", // Restore original width
//                                         height: "100%", // Restore original height
//                                         ease: "power1.inOut",
//                                         onComplete: function () {
//                                           // Restore the .leftblock's original size and position
//                                           gsap.to(".leftblock", {
//                                             duration: 1.5,
//                                             y: 0, // Move back to original position
//                                             scale: 1, // Restore size
//                                             opacity: 1, // Fade back in
//                                             ease: "power1.inOut",
//                                             onComplete: function () {
//                                               gsap.to(".nav-second,.heading", {
//                                                 duration: 1.5,
//                                                 x: 0,
//                                                 y: 0, // Move back to original position
//                                                 scale: 1, // Restore size
//                                                 opacity: 1, // Fade back in
//                                                 ease: "power1.inOut",
//                                                 onComplete: function () {
//                                                   // Restore the .leftblock's original size and position
//                                                   gsap.to(".main", {
//                                                     duration: 1.5,
//                                                     y: 0, // Move back to original position
//                                                     scale: 1, // Restore size
//                                                     opacity: 1, // Fade back in
//                                                     ease: "power1.inOut",
//                                                   });
//                                                 },
//                                               });
//                                             },
//                                           });
//                                         },
//                                       });
//                                     }
//                                   });
//                                 }
//                               });
//                             }
//                           });
//                         }
//                       });
//                     }
//                   });
//                 }
//               });
//             }
//           });
//         }
//       });
//     }
//   });
