# frozen_string_literal: true

require "spec_helper"

RSpec.describe "reddit/subreddit", type: :feature do
  before do
    Capybara.page.driver.browser.resize(750, 1000)
    visit "/r/mobile-cta/dismissable"
  end

  describe "Pre DOM Mutation" do
    it "has the main social feed" do
    end
  end
end
