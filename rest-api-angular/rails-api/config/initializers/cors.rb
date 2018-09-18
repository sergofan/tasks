# Avoid CORS issues when API is called from the frontend app
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, "Rack::Cors" do
  allow do
    origins 'localhost:9000', '127.0.0.1:9000', 'localhost:3000', '127.0.0.1:3000',
            /^http:\/\/192\.168\.0\.\d{1,254}(:\d+)?$/,
            /^http:\/\/192\.168\.1\.\d{1,254}(:\d+)?$/

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
