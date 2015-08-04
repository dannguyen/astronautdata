# Astronaut Data

Just collecting data about astronauts.

Inspired by this blog post: [Astronaut Abby: How to Become an Astronaut](http://astronautabby.com/how-to-become-an-astronaut-2/)


### Startup instructions


##### Mirror the NASA bios directory:

    wget --recursive --no-parent \
      --convert-links http://www.jsc.nasa.gov/Bios/

(currently stored in [stash/www.jsc.nasa.gov](stash/www.jsc.nasa.gov))


##### Download the latest factbook

    curl -O http://www.nasa.gov/pdf/740566main_current.pdf


(currently stored in [stash/740566main_current.pdf](740566main_current.pdf))
