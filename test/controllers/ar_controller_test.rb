require 'test_helper'

class ArControllerTest < ActionDispatch::IntegrationTest
  test "should get StaticPages" do
    get ar_StaticPages_url
    assert_response :success
  end

end
