const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-20 px-6 bg-gray-950 text-white relative overflow-hidden"
    >
      <div className="max-w-4xl text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          About Me
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          আমি জিএম আল সিয়াম। প্রযুক্তির দুনিয়ায় আমি একজন <span className="text-blue-500 font-semibold">রিঅ্যাক্ট ডেভেলপার</span>। জাভাস্ক্রিপ্ট নিয়ে কাজ করতে স্বাচ্ছন্দ্য বোধ করি এবং বর্তমানে <span className="text-blue-500 font-semibold">Node.js</span> শিখছি, যা দিয়ে আমি নিজের প্রজেক্টগুলোর ব্যাক-এন্ড সামলাতে পারি। নতুন প্রযুক্তি শেখার প্রতি আমার সবসময়ই আগ্রহ রয়েছে।
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          কোডিং ছাড়া আমার জীবনও সৃজনশীলতায় ভরা। আমি ভিডিও তৈরি করতে ভালোবাসি, বিশেষ করে প্রকৃতির সৌন্দর্যকে ক্যামেরায় তুলে ধরি। এছাড়াও আমার পছন্দের কাজগুলো:
        </p>

        <ul className="text-gray-400 text-lg list-disc list-inside space-y-2">
          <li>ভ্রমণ: নতুন জায়গা ঘুরে দেখা এবং অভিজ্ঞতা সংগ্রহ করা।</li>
          <li>আঁকাআঁকি: অবসরে পেন্সিল হাতে নিয়ে কিছু আঁকা।</li>
          <li>গেমিং: ভিডিও গেমস খেলতে ভালোবাসি।</li>
          <li>খাবার: নতুন এবং স্বাদযুক্ত খাবার টেস্ট করা।</li>
        </ul>

        <p className="text-gray-400 text-lg leading-relaxed">
          আমি বর্তমানে <a href="https://maps.app.goo.gl/eWJXupoDeDVgUR7n8" className="text-blue-500 font-semibold">যশোর</a> থাকি। প্রযুক্তি দিয়ে সমস্যা সমাধান করতে চাই এবং আমার কন্টেন্টের মাধ্যমে মানুষের মনকে আনন্দ দিতে চাই।
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
