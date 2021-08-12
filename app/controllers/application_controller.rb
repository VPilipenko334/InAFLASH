class ApplicationController < ActionController::Base

    before_action :underscore_params!
    def underscore_params!
    underscore_hash = -> (hash) do
        hash.transform_keys!(&:underscore)
        hash.each do |key, value|
        if value.is_a?(ActionController::Parameters)
            underscore_hash.call(value)
        elsif value.is_a?(Array)
            value.each do |item|
            next unless item.is_a?(ActionController::Parameters)
            underscore_hash.call(item)
            end
        end
        end
    end
    underscore_hash.call(params)
    end

    helper_method :current_user, :logged_in?

    #CRLLL

    def current_user
        return nil if session[:session_token].nil?

        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in!
        render json: { base: ['invalid credentials'] }, status: 401 if !logged_in?
    end 

    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

end 

