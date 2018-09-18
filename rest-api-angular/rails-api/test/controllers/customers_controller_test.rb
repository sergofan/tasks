require 'test_helper'

class CustomersControllerTest < ActionController::TestCase
  setup do
    @customer = customers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:customers)
  end

  test "should create customer" do
    assert_difference('Customer.count') do
      post :create, customer: { name: @customer.name, status_id: @customer.status_id }
    end

    assert_response 201
  end

  test "should show customer" do
    get :show, id: @customer
    assert_response :success
  end

  test "should update customer" do
    put :update, id: @customer, customer: { name: @customer.name, status_id: @customer.status_id }
    assert_response 204
  end

  test "should destroy customer" do
    assert_difference('Customer.count', -1) do
      delete :destroy, id: @customer
    end

    assert_response 204
  end
end
