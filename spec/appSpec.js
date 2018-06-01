describe("App", () => {
  const button = document.querySelector('#click-me')
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      button.click();
      expect(counter.textContent).toBe("120")
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(button.id).toBe('click-me');
    })
  })


  
  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(5)).toBe(120);
    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(-5)).toBe(1);
    })
  })

  describe("Computer", () => {
    let comp = new Computer();
    it("is created with a hard drive size of 512", () => {
      expect(comp.hardDriveSpace).toBe(512);
    })
  })

  describe("installProgram", () => {
    let comp = new Computer();
    beforeEach(function (done) {
      comp.installProgram(400, function () {
        done();
      })
    })
    it("can install a program if there is sufficient space", (done) => {
      expect(comp.hardDriveSpace).toBe(112)
      done();

    })
  })

  describe("notInstall", () => {
    let comp = new Computer();
    beforeEach(function (done) {
      comp.installProgram(530, function () {
        done();
      })
    })
    it("will not install the program", (done) => {
      expect(comp.hardDriveSpace).toBe(512)
      done();
    })
  })




  describe("format", () => {
    let comp = new Computer();
    it("resets the hard drive to 512, even after programs have been installed", () => {
      comp.hardDriveSpace = 500;
      comp.format();
      expect(comp.hardDriveSpace).toBe(512);
    })
  })
})