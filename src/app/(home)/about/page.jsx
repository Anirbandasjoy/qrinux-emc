/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="pt-28">
      <div className="w-full h-[416px]">
        <img
          src="https://i.ibb.co/SRXJcVV/477b6edf290550233686adf706db1478.jpg"
          alt="About Banner Image"
          className="w-full h-full object-cover object-bottom rounded-lg"
        />
      </div>
      {/* about text */}
      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Main Content Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-8">
          {/* Introduction Paragraph */}
          <p className="text-gray-700 text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            facilisi vivamus massa magna. Blandit mauris libero condimentum
            commodo nodi consectetur socios convallis sit. Magna diam est justo
            sed volutpat vulputate. Lectus sit ante hac odio elementum egestas
            neque. Adipiscing purus eu scelerisque sit urna est. Turpis
            curabitur cras laoreet erat euismod.
          </p>

          {/* Mid Section Paragraph */}
          <p className="text-gray-700">
            Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Id
            aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. Vivamus
            sit placerat in sed volutpat morbi lectus sed. Magna turpis lectus
            enim aliquet etiam sit nunc. Lectus nibh gravida purus ut at morbi
            imperdiet. Maecenas sed at nunc lectus viverra nisl nec ultricies
            nunc tincidunt. Sit suscipit tortor turpis sed fringilla lectus
            facilisis amet. Id aliquam neque, ut vivamus sit imperdiet enim,
            lacus, vel. Vivamus sit placerat in sed volutpat morbi lectus sed.
            Magna turpis lectus enim aliquet etiam sit nunc. Lectus nibh gravida
            purus ut at morbi imperdiet. Maecenas sed at nunc lectus viverra
            nisl nec ultricies nunc tincidunt.
          </p>

          {/* Quote Section */}
          <div className="text-left py-6 italic text-2xl font-medium text-gray-500 rounded-lg">
            Sit suscipit tortor turpis sed fringilla lectus facilisis amet.
            Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id
            aliquam neque, ut vivamus sit imperdiet enim, lacus, vel.
          </div>

          {/* Bullet Point Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">ARE YOU AMAZED?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Blandit mauris libero condimentum commodo socios convallis sit.
              </li>
              <li>Lacus sit amet sed odio ut volutpat neque.</li>
              <li>Lobortis egestas scelerisque habitasse vestibulum est.</li>
              <li>
                Fusce arcu nulla finibus amet eros ante eu molestie. Urna in
                mollis non vestibular urna rutrum.
              </li>
            </ul>
          </div>

          {/* Image and Content Side by Side */}
          <div className="flex gap-4">
            {/* Image Section */}
            <div className="w-1/2">
              <img
                src="https://i.ibb.co/YZ5kNjC/200d987d1917cd4ed8e95a4469714eed.jpg"
                alt="Product or Related Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="w-1/2 space-y-4">
              <h2 className="text-lg font-semibold">
                VELIT, PRAESENT PHARETRA MALESUADA
              </h2>
              <p className="text-gray-700">
                Id pulvinar amet. Consequat potenti mollis massa iaculis et,
                dolor, eget lectus. Aliquam pellentesque molestie felis fames
                sed eget non euismod eget. Et eget ullamcorper urna, elit ac
                diam tellus viverra lacus. Cras sagittis tellus nunc
              </p>
              <p className="text-gray-700">
                integer vitae neque bibendum eget. Tempus malesuada et
                pellentesque maecenas. Tortor diam dignissim amet, in interdum
                aliquet. Magnis dictum et eros purus fermentum, massa
                ullamcorper sit sollicitudin. Nascetur libero elementum
                adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam
                lacus, nunc integer etiam. Mattis pulvinar non viverra donec
                pellentesque. Odio mi consequat libero dolor. Porta ut diam
                lobortis eget leo, lectus. Urna in sollicitudin in vestibulum
                erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis
                tellus nunc integer vitae neque bibendum eget. Tempus malesuada
                et pellentesque maecenas. Sociis porttitor elit tincidunt tellus
                sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim
                lacus. Praesent imperdiet vitae eu, eu tincidunt nunc integer
                sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
